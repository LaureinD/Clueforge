import {userSeeder} from "@/database/seeders/userSeeder";
import {prisma} from "@/database/prisma";

async function main() {
    await userSeeder(50);
}

main()
    .catch((error) => {
        console.log(error)
    })
    .finally(async () => {
        await prisma.$disconnect();
    });