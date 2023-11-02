export const protectedRoutes = ["/dashboard", /\/dashboard\/(?:.)*/, "/profile", "/settings"]
export const unprotectedRoutes = ["/login", "/register"]
export const publicRoutes = ["/", ...unprotectedRoutes]
