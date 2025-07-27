import prisma from "@/database/prisma";
import {userSeeder} from "@/database/seeders/userSeeder";

async function main() {
    await userSeeder();
}

main()
    .catch((e) => {
        console.log(e)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })