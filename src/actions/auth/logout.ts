"use server"

import {cookies} from "next/headers";
import {prisma} from "@/database/prisma";

export async function logout() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("session_id");

    if (!sessionCookie) {
        return {
            success: false,
            message: "No active session found."
        }
    }

    const sessionId = sessionCookie.value;

    await prisma.session.updateMany({
        where: {
            id: sessionId
        },
        data: {
            revoked_at: new Date()
        }
    });

    cookieStore.set({
        name: "session_id",
        value: "",
        httpOnly: true,
        path: "/",
        maxAge: 0
    })
}