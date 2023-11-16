import { NextResponse, NextRequest } from "next/server";
import { protectedRoutes } from "@/router/routes"
import { DecodedToken } from "app/types/global";

export function middleware(request: NextRequest) {
    const currentUser: DecodedToken = JSON.parse(request.cookies.get('currentUser')?.value || '{}');
    const isProtectedRoute = protectedRoutes.some(r => {
        if (typeof r === 'string') {
            return request.nextUrl.pathname === r
        } else {
            // regex
            return r.test(request.nextUrl.pathname)
        }
    })

    // Rule 1
    if (request.nextUrl.pathname === '/') {
        if (Object.keys(currentUser).length !== 0) {
            const redirectUrl = new URL(`/dashboard/${currentUser?.role}`, request.nextUrl.origin).toString();
            return NextResponse.redirect(redirectUrl)
        } else {
            const redirectUrl = new URL("/auth/login", request.nextUrl.origin).toString()
            return NextResponse.redirect(redirectUrl)
        }
    }
    // Rule 2
    if (request.nextUrl.pathname === '/auth/login') {
        if (Object.keys(currentUser).length !== 0) {
            const redirectUrl = new URL(`/dashboard/${currentUser?.role}`, request.nextUrl.origin).toString();
            return NextResponse.redirect(redirectUrl)
        }
    }
    // Rule 3
    if (isProtectedRoute) {
        if (Object.keys(currentUser).length == 0) {
            const redirectUrl = new URL("/auth/login", request.nextUrl.origin).toString();
            return NextResponse.redirect(redirectUrl)
        }
    }

    return NextResponse.next();
}