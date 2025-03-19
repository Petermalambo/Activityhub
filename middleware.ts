import { NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
    const token = await getToken({ req })
    const isAuthenticated = !!token

    // Get the pathname of the request
    const path = req.nextUrl.pathname

    // Protected routes - only accessible to authenticated users
    const protectedRoutes = ["/dashboard", "/profile", "/activities"]

    // Check if the path is a protected route
    const isProtectedRoute = protectedRoutes.some((route) => path.startsWith(route))

    // If the route is protected and the user is not authenticated, redirect to the login page
    if (isProtectedRoute && !isAuthenticated) {
        const url = new URL("/auth/signin", req.url)
        url.searchParams.set("callbackUrl", path)
        return NextResponse.redirect(url)
    }

    // If the user is authenticated and trying to access the login page, redirect to the dashboard
    if (isAuthenticated && path === "/auth/signin") {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/profile/:path*", "/activities/:path*", "/auth/signin"],
}

