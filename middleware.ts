import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { protectedRoutes } from "@/router/routes"

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser")?.value;
    const isProtectedRoute = protectedRoutes.includes(request.nextUrl.pathname);
    const isNotLoggedIn = !currentUser;
    if (isProtectedRoute && isNotLoggedIn) {
        return NextResponse.redirect("/auth/login");
    }
    return NextResponse.next();


}