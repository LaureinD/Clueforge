import {getUsers} from "@/database/services/userService";
import prisma from "@/database/prisma";
import {KpiCard} from "@/components/kpiCard"

const users = getUsers();

const countAllUsers = await prisma.user.count();

const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)

const countActiveUsers = await prisma.user.count({
    where: {
        deleted_at: null,
        last_login: {
            gte: twoWeeksAgo
        },
    }
})

const countNewUsers = await prisma.user.count({
    where: {
        deleted_at: null,
        created_at: {
            gte: twoWeeksAgo
        },
    }
})

export default async function usersIndex(){
    return (
        <div>
            <div className={"w-full h-4 grid grid-cols-3 gap-x-6"}>
                <KpiCard icon={"userGroup"} color={"primary"} name={"All users"} value={countAllUsers} />
                <KpiCard icon={"userPlus"} color={"success"} name={"New users"} value={countAllUsers} />
                <KpiCard icon={"user"} color={"warning"} name={"Active users"} value={countAllUsers} />
            </div>
        </div>
    )
}