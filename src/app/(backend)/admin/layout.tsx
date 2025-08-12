import Logo from "@/components/logo";
import Link from "next/link";
import Icon from "@/components/icon";

export default function backendLayout(
    {
        children
    }:{
        children:React.ReactNode;
    }
){
    return (
        <div className={"w-full min-h-screen bg-background flex justify-end"}>
            <nav className={"sticky top-0 left-0 min-w-[185px] w-[calc(15vw)] 3xl:w-1/10 flex flex-col gap-6 bg-surface h-screen shadow p-6"}>
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
            </nav>
            <div className={"flex-grow h-screen overflow-hidden p-6"}>
                {children}
            </div>
        </div>
    )
}