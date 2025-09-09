"use server"

import {prisma} from "@/database/prisma";
import {verifyPassword} from "@/utils/auth";
import {createSession} from "@/database/services/sessionService";

interface UserLoginInput {
    email: string,
    password: string
    rememberMe: boolean
}

export async function login(input: UserLoginInput) {
    const { email, password, rememberMe } = input;
    const errors: Record<string, string> = {};

    // const REFRESH_DURATION = rememberMe ? 7 * 24 * 60 * 60 * 1000 : 3 * 60 * 60 * 1000 ; //7 days vs 3 hours (ms)
    // const ACCESS_DURATION = 20 * 60 * 1000 ; // 20min (ms)

    if (!email) errors.email = "Email is required."
    if (!password) errors.password = "Password is required."
    if (Object.keys(errors).length > 0) return {
        success: false,
        errors
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email.toLowerCase()
        }
    });

    if (!user) return {
        success: false,
        errors: { email:"User not found." }
    }

    if (!user.email_verified_at) return {
        success: false,
        errors: { email: 'Email not verified.' }
    }

    const passwordValid = await verifyPassword(password, user.password);
    if (!passwordValid) return {
        success: false,
        errors: { password: "Incorrect password." }
    }

    const now = new Date();

    try {
        await createSession(user.id, rememberMe);

    } catch (error) {
        console.log('Error creating session: ', error);
    }

    try {
        await prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                last_login: now
            }
        });
    } catch (error) {
        console.log('Error creating user: ', error);
    }

    return {
        success: true,
        errors: {}
    }
}