import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { protectedRoutes } from "@/router/routes"

export function middleware(request: NextRequest) {
        const currentUser = request.cookies.get("currentUser")?.value;
        const isProtectedRoute = protectedRoutes.some(r => {
                if(typeof r === 'string') {
                    return request.nextUrl.pathname === r 
                } else {
                    // regex
                    return r.test(request.nextUrl.pathname) 
                }
            })
            
        console.log("middleware", { currentUser, isProtectedRoute });
        if (isProtectedRoute && currentUser === undefined) {
                console.log("middleware", "redirecting to login");
                const redirectUrl = new URL("/auth/login", request.nextUrl.origin).toString();
                return NextResponse.redirect(redirectUrl);
        }
        return NextResponse.next();
}