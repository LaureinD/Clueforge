import type { User } from "../../../generated/prisma/client";
import bcrypt from "bcrypt";
import prisma from "@/database/prisma";

export async function userSeeder(){
    const count: number = await prisma.user.count();

    if (count === 0){
        const now = new Date();

        const users: Omit<User, 'id' | 'last_login' | 'deleted_at'>[] = [
            {email: 'admin@example.com', password: 'password', first_name: 'admin', last_name: 'admin', email_verified_at: now, created_at: now, updated_at: now},
            {email: 'user@example.com', password: 'password', first_name: 'user', last_name: 'user', email_verified_at: now, created_at: now, updated_at: now},
        ]

        const userData = await Promise.all(
            users.map( async user => {
                return {
                    ...user,
                    password: await bcrypt.hash(user.password,10),
                }
            })
        )

        await prisma.user.createMany({
            data: userData,
        })
    }
}