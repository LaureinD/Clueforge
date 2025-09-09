import Logo from "@/components/logo";
import Link from "next/link";

export function FrontendNavbar(){
    return (
        <nav
            className={"sticky top-0 z-999 w-full p-6 flex justify-between items-center shadow-lg shadow-background bg-surface"}>
            <div>
                <Logo imageSize={30} textSize={"text-2xl"} href={"/"}></Logo>
            </div>
            <div className={"flex gap-14"}>
                <div className={"flex justify-around gap-12 text-lg"}>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/why-ClueForge'}>Why ClueForge</Link>
                    <Link href={'/pricing'}>Pricing</Link>
                    <Link href={'/help'}>Help</Link>
                    <Link href={'/contact'}>Contact</Link>
                </div>
                <div>
                    <Link href={'/login'}>Login</Link>
                </div>
            </div>
        </nav>
    )
}