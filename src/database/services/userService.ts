import Prisma from "../../../../generated/prisma/client"
import prisma from "@/database/prisma";
import { User } from "../../../../generated/prisma/client";

type CreateUserData = {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
}

type UpdateUserData =
    Partial<CreateUserData>
    & {
        email_verified_at?: Date,
        last_login?: Date,
        deleted_at?: Date,
    }

// Index
export async function getUsers(): Promise<User[]> {
    return prisma.user.findMany();
}
 // Read
export async function getUser(id: number): Promise<User | null> {
    return prisma.user.findUnique({
        where: { id },
    })
}

// Create
export async function addUser(data: CreateUserData): Promise<User> {
    try {
        return await prisma.user.create({data})
    } catch (error) {
        throw error;
    }
}

// Update
export async function updateUser(id:number, data: UpdateUserData): Promise<User> {
    try {
        return await prisma.user.update({
            where: { id },
            data,
        })
    } catch (error) {
        throw new Error;
    }
}

// Soft delete
export async function deleteUser(id: number): Promise<User> {
    const now: Date = new Date();
    return await updateUser(id, { deleted_at: now });
}

// Force delete
export async function forceDeleteUser(id: number): Promise<User> {
    try {
        return await prisma.user.delete({
            where: { id },
        })
    } catch (error) {
        throw error;
    }
}
