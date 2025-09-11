import {prisma} from "@/database/prisma";
import {User} from "@prisma/client";


export type CreateUserData = {
    email: string,
    password: string,
    first_name: string,
    last_name: string,
}

export type UpdateUserData =
    Partial<CreateUserData>
    & {
        email_verified_at?: Date,
        last_login?: Date,
        deleted_at?: Date,
    }

export type GetUserData = Omit<CreateUserData, "password">

// Index
export async function getUsers() {
    return prisma.user.findMany();
}
 // Read
export async function getUser(id: User["id"]) {
    return prisma.user.findUnique({
        where: { id },
        select: {
            id: true,
            email: true,
            first_name: true,
            last_name: true,
        }
    })
}

export async function getDetailedUser(id: User["id"]) {
    return prisma.user.findUnique(({
        where: { id }
    }))
}

// Create
export async function addUser(data: CreateUserData) {
    try {
        return await prisma.user.create({data})
    } catch (error) {
        throw error;
    }
}

// Update
export async function updateUser(id: User["id"], data: UpdateUserData) {
    try {
        return await prisma.user.update({
            where: { id },
            data,
        })
    } catch (error) {
        throw error;
    }
}

// Soft delete
export async function deleteUser(id: User["id"]) {
    const now: Date = new Date();
    return await updateUser(id, { deleted_at: now });
}

// Force delete
export async function forceDeleteUser(id: User["id"]) {
    try {
        return await prisma.user.delete({
            where: { id },
        })
    } catch (error) {
        throw error;
    }
}
