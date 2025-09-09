import {NextRequest, NextResponse} from "next/server";
import {validateSession} from "@/database/services/sessionService";

export default async function middleware(request: NextRequest) {

    // todo: cache session data for faster load speed
    // Auth pages
    if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')) {
        const validSession = await checkAuth(request);

        if (validSession?.valid) {
            const response = NextResponse.redirect(new URL('/app', request.url));

            if (validSession.cookieToSet) {
                console.log(validSession.cookieToSet)
                response.cookies.set(validSession.cookieToSet);
            }

            return response;
        }

        return NextResponse.next();
    }

    // App pages
    if (request.nextUrl.pathname.startsWith('/app')) {
        const validSession = await checkAuth(request);

        if (validSession?.valid) {
            const response = NextResponse.next();

            if (validSession.cookieToSet) {
                response.cookies.set(validSession.cookieToSet);
            }

            return response;
        }

        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Admin pages
    if (request.nextUrl.pathname.startsWith('/admin')) {
        const validSession = await checkAuth(request);

        // todo: add admin validation
        if (validSession?.valid && validSession?.userId === 1) {
            const response = NextResponse.next();

            if (validSession.cookieToSet) {
                response.cookies.set(validSession.cookieToSet);
            }

            return response;
        }

        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    runtime: 'nodejs',
}

async function checkAuth(request: NextRequest) {
    const session = await validateSession(request.cookies);

    console.log(`%c Auth validation response: ${session.message}`, 'background: green; color: white; display: block;');

    return session.valid ? session : null;
}