import {cookies} from "next/headers";
import {getSession} from "@/database/services/sessionService";
import {getUser, GetUserData} from "@/database/services/userService";

export async function getCurrentUser(): Promise<GetUserData | null> {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("access_token")?.value;
    if (!accessToken) return null;

    const session = await getSession(accessToken);
    if (!session) return null;

    const user = await getUser(session.userId);
    if (!user) return null;

    return user;
}