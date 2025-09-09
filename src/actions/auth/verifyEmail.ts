"use server"

import {prisma} from "@/database/prisma";
import {randomBytes} from "node:crypto";

export async function sendVerificationEmail(userEmail: string){
    const user = await prisma.user.findUnique({
        where: {
            email: userEmail
        }
    })

    if (!user) return {
        success: false,
        message: 'Email not found'
    }

    await prisma.emailVerificationToken.updateMany({
        where: {
            userId: user.id,
            revoked_at: null,
        },
        data: {
            revoked_at: new Date(),
        }
    })

    const token = randomBytes(32).toString('hex');
    await prisma.emailVerificationToken.create({
        data: {
            token,
            userId: user.id
        }
    });

    // Todo: email integration
    console.log(`Sent email to: ${userEmail}`)
    console.log(`Verification link: http://localhost:3001/verify-email?token=${token}`);

    return {
        success: true,
        message: "Email sent successfully"
    }
}

export async function verifyEmail(token: string) {
    if (!token) return {
        success: false,
        message: "No token provided"
    }

    const tokenEntry = await prisma.emailVerificationToken.findUnique({
        where: {
            token
        },
        include: {
            user: true
        }
    })

    if (!tokenEntry) return {
        success: false,
        message: "Invalid or expired token"
    }

    const user = tokenEntry.user;

    if (user.email_verified_at) return {
        success: false,
        message: "Email already verified"
    }

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            email_verified_at: new Date()
        }
    })

    await prisma.emailVerificationToken.deleteMany({
        where: {
            userId: user.id
        }
    })

    return {
        success: true,
        message: "Email successfully verified"
    }
}

