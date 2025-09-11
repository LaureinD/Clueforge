import {KpiCard} from "@/components/kpiCard"
import {Suspense} from "react";
import Loading from "@/app/loading";
import UserIndexTable from "@/app/(backend)/admin/users/userIndexTable";
import {prisma} from "@/database/prisma";

export default async function UsersIndex(){
    const countAllUsers = await prisma.user.count({
        where: {
            deleted_at: null
        }
    });
    const oneMonthAgo = new Date(Date.now() - 30 * 24 *60 * 60 * 1000);
    const countActiveUsers = await prisma.user.count({
        where: {
            deleted_at: null,
            last_login: {
                gte: oneMonthAgo
            },
        }
    })
    const countNewUsers = await prisma.user.count({
        where: {
            deleted_at: null,
            created_at: {
                gte: oneMonthAgo
            },
        }
    })
    const countRetainedUsers = await prisma.user.count({
        where: {
            deleted_at: null,
            created_at: {
                gte: oneMonthAgo
            },
            last_login: {
                gte: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
            }
        }
    })
    const retentionRate = countRetainedUsers / countNewUsers * 100;

    return (
        <div className={"relative flex flex-col gap-y-6 h-full"}>
            <div className={"w-full grid grid-cols-3 3xl:grid-cols-4 gap-x-6"}>
                <KpiCard icon={"userGroup"} color={"primary"} name={"All users"} value={countAllUsers} tooltip={"All users"} />
                <KpiCard icon={"userPlus"} color={"success"} name={"New users"} value={countNewUsers} tooltip={"Users created during the last 30 days."} />
                <KpiCard icon={"user"} color={"warning"} name={"Active users"} value={countActiveUsers} tooltip={"Users who logged in during the last 30 days."} />
                <KpiCard icon={"arrowPath"} color={"accent"} name={"Retention rate"} value={retentionRate+' %'} tooltip={"Percentage of new users who are still active 14 days after creating their account."} className={"hidden 3xl:flex"} />
            </div>

            <div className={"w-full overflow-y-scroll px-6 bg-surface rounded shadow-xl"}>
                <Suspense fallback={Loading()}>
                    <UserIndexTable />
                </Suspense>
            </div>

            {/*<div className={"absolute top-0 left-0 w-full h-full bg-background/85 flex items-center justify-center"}>*/}
            {/*    <div className={"bg-surface opacity-100 w-[500px] rounded shadow"}>*/}
            {/*        <CreateUser/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}