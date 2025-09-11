import {prisma} from "@/database/prisma";
import {randomBytes} from "node:crypto";
import {cookies} from "next/headers";
import {Session, User} from "@prisma/client";
import {NextRequest} from "next/server";
import {ResponseCookie} from "next/dist/compiled/@edge-runtime/cookies";

type ValidateResult = {
    valid: boolean,
    message: string,
    userId: User["id"] | null,
    cookieToSet: ResponseCookie | null
}

const REFRESH_TTL = 3 * 60 * 60 * 1000; // 3 hours (ms)
const REFRESH_TTL_REMEMBER_ME = 7 * 24 * 60 * 60 * 1000; // 7 days (ms)
const ACCESS_TTL = 20 * 60 * 1000; // 20 min (ms)

// TODO: cookie access_token wordt automatisch verwijderd na cookie TTL. Hierdoor log je uit ook al is er nog een geldig refresh token. Opvangen en refreshen

export async function createSession(userId: User["id"], rememberMe: boolean = false) {
    // todo: multiple sessions per user (multiple devices), remove this line.
    await revokeAllSessions(userId);

    const refresh_token = randomBytes(32).toString('hex');
    const refresh_expire = new Date(Date.now() + (rememberMe ? REFRESH_TTL_REMEMBER_ME : REFRESH_TTL));

    const access_token = randomBytes(32).toString('hex');
    const access_expire = new Date(Date.now() + ACCESS_TTL);

    try {
        await prisma.session.create({
            data: {
                userId,
                refresh_token,
                access_token,
                refresh_expire,
                access_expire,
            }
        });
    } catch (error) {
        console.log('Error creating session: ', error);
        throw new Error(`Error creating session: ${error}`)
    }

    const cookieStore = await cookies();
    cookieStore.set({
        name: "access_token",
        value: access_token,
        secure: true,
        sameSite: 'lax',
        httpOnly: true,
        path: "/",
        maxAge: ACCESS_TTL / 1000  // Access duration (s)
    })

    cookieStore.set({
        name: "refresh_token",
        value: refresh_token,
        secure: true,
        sameSite: 'lax',
        httpOnly: true,
        path: "/",
        maxAge: (rememberMe ? REFRESH_TTL_REMEMBER_ME : REFRESH_TTL) / 1000  // Refresh duration (s)
    })
}

export async function getSession(accessToken: Session["access_token"]) {
    return prisma.session.findUnique({
        where: {
            access_token: accessToken
        },
        select: {
            refresh_token: true,
            access_token: true,
            userId: true
        }
    })
}

export async function getDetailedSession(token: Session['access_token'] | Session['refresh_token'], tokenType: 'access' | 'refresh'): Promise <Session | null> {
    if (!token) return null;

    if (tokenType === "access") return prisma.session.findUnique({
        where: {
            access_token: token
        }
    })
    else return prisma.session.findUnique({
        where: {
            refresh_token: token
        }
    })

}

export async function validateSession(requestCookies: NextRequest["cookies"]): Promise <ValidateResult> {

    const now = new Date();
    let session = null;
    let cookieToSet: ResponseCookie | null = null;

    const accessToken = requestCookies.get('access_token')?.value;
    if (accessToken) {
        try {
            session = await getDetailedSession(accessToken, "access");

        } catch (error) {
            return {
                valid: false,
                message: `Error retrieving session based on access token: ${error}`,
                userId: null,
                cookieToSet,
            }
        }

        const errorMessage = await checkSession(session, now);
        if (errorMessage) return {
            valid: false,
            message: errorMessage,
            userId: null,
            cookieToSet,
        }

        if (session!.access_expire > now) return {
            valid: true,
            message: 'Session is valid.',
            userId: session!.userId,
            cookieToSet,
        }
    }

    const refreshToken = requestCookies.get("refresh_token")?.value;
    if (refreshToken) {
        try {
            session = await getDetailedSession(refreshToken, "refresh");

        } catch (error) {
            return {
                valid: false,
                message: `Error retrieving session based on refresh token: ${error}`,
                userId: null,
                cookieToSet,
            }
        }

        const errorMessage = await checkSession(session, now);
        if (errorMessage) return {
            valid: false,
            message: errorMessage,
            userId: null,
            cookieToSet,
        }

        if (session!.refresh_expire > now) {
            try {
                const response = await refreshSession(refreshToken);

                session = response.session;
                cookieToSet = response.cookieToSet;

                return {
                    valid: true,
                    message: 'Session is valid.',
                    userId: session.userId,
                    cookieToSet,
                }

            } catch (error) {
                return {
                    valid: false,
                    message: `Error refreshing token: ${error}.`,
                    userId: null,
                    cookieToSet,
                }
            }
        }
    }

    return {
        valid: false,
        message: `No active session`,
        userId: null,
        cookieToSet,
    }
}

async function checkSession(session: Session | null, now: Date): Promise <string | null> {
    if (!session) return 'No session found.';
    else if (session.revoked_at) return 'Session is revoked.';
    else if (session.access_expire < now && session.refresh_expire < now) return 'Session is expired.';
    return null;
}

export async function refreshSession(refreshToken: Session['refresh_token']) {
    const now = new Date();

    if (!refreshToken) throw new Error('No Refresh token provided.')

    const session = await prisma.session.findUnique({
        where: {
            refresh_token: refreshToken
        }
    });

    if (session && !session.revoked_at && session.refresh_expire > now) {
        const newAccessToken = randomBytes(32).toString('hex');
        const newAccessExpire = new Date(Date.now() + ACCESS_TTL);
        let updatedSession = null;

        try {
            updatedSession = await prisma.session.update({
                where: {
                    refresh_token: refreshToken
                },
                data: {
                    access_token: newAccessToken,
                    access_expire: newAccessExpire,
                }
            });
        } catch (error) {
            throw new Error(`Error refreshing token: ${error}`);
        }

        return {
            session: updatedSession,
            cookieToSet: {
                name: "access_token",
                value: newAccessToken,
                secure: true,
                sameSite: 'lax' as const,
                httpOnly: true,
                path: "/",
                maxAge: ACCESS_TTL / 1000  // Access duration (s)
            },
        };

    } else if (session) {
        throw new Error('Session expired.')

    } else {
        throw new Error('No session found.')
    }
}

export async function revokeAllSessions(userId: User['id']) {
    const now = new Date();

    try {
        await prisma.session.updateMany({
            where: {
                userId,
                refresh_expire: {
                    gte: now,
                }
            },
            data: {
                revoked_at: now,
            }
        })
    } catch (error) {
        console.log('Error revoking sessions: ', error);
    }
}
