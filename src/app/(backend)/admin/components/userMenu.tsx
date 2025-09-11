"use client"

import {capitalize} from "@/utils/helpers";
import {Button} from "@/components/ui/button";
import {GetUserData} from "@/database/services/userService";
import {useEffect, useRef, useState} from "react";

export default function UserMenu({currentUser}: { currentUser: GetUserData | null }) {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current
                && !menuRef.current.contains(event.target as Node)
                && buttonRef.current
                && !buttonRef.current.contains(event.target as Node)
            ) {
                setOpenMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [])

    return (
        <div className={"relative"}>
            {
                openMenu &&
                <div ref={menuRef} id={'userMenu'} className={"absolute bottom-full mb-1 w-full border border-background bg-surface overflow-hidden p-3 shadow"}>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
            }

            <Button ref={buttonRef} type={"button"} color={"surface"} size={"fit"} className={"w-full"} onClick={() => setOpenMenu(!openMenu)}>
                <div className={"flex gap-3 px-4 py-2 items-center"}>
                    <div className={"w-fit rounded-full p-3 bg-accent text-surface"}>
                        <p className={"uppercase text-xl font-semibold size-2 flex items-center justify-center"}>{currentUser?.first_name["0"]}</p>
                    </div>
                    <p className={"font-medium"}>{currentUser && capitalize(currentUser.first_name) + " " + capitalize(currentUser.last_name)} </p>
                </div>
            </Button>
        </div>
    )
}