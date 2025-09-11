import {getCurrentUser} from "@/database/services/authService";

export default async function dashboard(){
    const currentUser = await getCurrentUser();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{currentUser?.first_name}</p>
        </div>
    )
}