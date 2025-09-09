import {FrontendNavbar} from "@/components/layout/frontendNavbar";
import {FrontendFooter} from "@/components/layout/frontendFooter";

export default function frontendLayout(
    {
        children
    }:{
        children:React.ReactNode;
    }
){
    return (
        <div className={"w-full min-h-screen bg-background"}>
            <div id="wrapper" className={"bg-surface w-[1320px] mx-auto min-h-screen flex flex-col"}>

                <FrontendNavbar />

                <main className={"flex-1 p-6"}>
                    {children}
                </main>

                <FrontendFooter />

            </div>
        </div>
    )
}