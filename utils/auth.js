// utils/auth.js

import jwtDecode from 'jwt-decode';

export function getTokenFromCookie(req) {
    const token = req.cookies.token;
    return token;
}

export function decodeToken(token) {
    return jwtDecode(token);
}
