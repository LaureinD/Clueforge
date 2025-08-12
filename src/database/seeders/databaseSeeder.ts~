import prisma from "@/database/prisma";
import {userSeeder} from "@/database/seeders/userSeeder";

async function main() {
    await userSeeder();
}

main()
    .catch((error) => {
        console.log(error)
    })
    .finally(async () => {
        await prisma.$disconnect();
    });