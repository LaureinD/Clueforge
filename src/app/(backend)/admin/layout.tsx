import AdminNavBar from "@/app/(backend)/admin/components/adminNavBar";
import {getCurrentUser} from "@/database/services/authService";

export default async function backendLayout(
    {
        children
    }:{
        children:React.ReactNode;
    }
){

    const currentUser = await getCurrentUser();

    return (
        <div className={"w-full min-h-screen bg-background flex justify-end"}>
            <AdminNavBar currentUser={currentUser ?? null} />

            <div className={"flex-grow h-screen overflow-hidden p-6"}>
                {children}
            </div>
        </div>
    )
}