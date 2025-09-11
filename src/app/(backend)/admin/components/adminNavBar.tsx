"use client"

import Logo from "@/components/logo";
import Icon from "@/components/icon";
import Link from "next/link";
import {GetUserData} from "@/database/services/userService";
import UserMenu from "@/app/(backend)/admin/components/userMenu";

export default function AdminNavBar({currentUser}: { currentUser: GetUserData | null }) {
    return (
        <nav
            className={"sticky top-0 left-0 min-w-[185px] w-[calc(15vw)] 3xl:w-1/10 flex flex-col justify-between bg-surface h-screen shadow p-6"}>
            <div className={"flex flex-col gap-6"}>
                <Logo imageSize={32} textSize={"text-xl"} href={"/admin"}/>
                <div className={"w-full flex justify-between items-center"}>
                    <div className={"flex gap-3 items-center"}>
                        <Icon name={"home"} className={"size-5"}/>
                        <Link href={"/admin"}>Dashboard</Link>
                    </div>
                    <Icon name={"chevronRight"} className={"size-4"}/>
                </div>

                <div className={"w-full flex justify-between items-center"}>
                    <div className={"flex gap-3 items-center"}>
                        <Icon name={"user"} className={"size-5"}/>
                        <Link href={"/admin/users"}>Users</Link>
                    </div>
                    <Icon name={"chevronRight"} className={"size-4"}/>
                </div>
            </div>

            <UserMenu currentUser={currentUser} />
        </nav>
    )
}