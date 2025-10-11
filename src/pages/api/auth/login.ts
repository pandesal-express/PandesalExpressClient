import type { APIRoute } from "astro";
import { serverApi } from "@/lib/server-api.ts";
import type { AuthResponse, FastApiResponse } from "@/types";

export const POST: APIRoute = async ({request, cookies, redirect, locals}) => {
    try {
        const data = await request.formData();
        const storeId = data.get("storeId")!;
        const timeLogged = new Date().toISOString();

        const faceResponse = await serverApi.request<FastApiResponse>({
            baseURL: import.meta.env.PUBLIC_FASTAPI_URL,
            url: "/verify-face",
            method: "POST",
            data: data,
        });

        if (!faceResponse.success) {
            return new Response(JSON.stringify({
                message: faceResponse.message,
            }), {status: 401, headers: {'Content-Type': 'application/json'}});
        }

        const authResponse = await serverApi.request<AuthResponse>({
            url: '/auth/face-login',
            method: 'POST',
            headers: {'Authorization': `Bearer ${faceResponse.data!.jwt_token}`},
            data: {
                userId: faceResponse.data!.userId,
                timeLogged: timeLogged,
                storeId: storeId,
            },
        });

        cookies.set('jwt_token', authResponse.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            expires: new Date(authResponse.expiration),
        });

        cookies.set('refresh_token', authResponse.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/api/auth/refresh-token',
            expires: new Date(authResponse.refreshTokenExpiration),
        });

        locals.user = authResponse.user;
        locals.token = authResponse.token;

        const url = new URL(request.url);
        const user = authResponse.user;

        if (user.department) {
            url.pathname = user.department.name === 'Store Operations' ? `/stores/${storeId}` : '/stores';
        }

        return redirect(url.pathname, 303);
    } catch (e: any) {
        console.error("Error checking attendance: ", e);
        return new Response(JSON.stringify({
            message: e.message ?? 'An internal error occurred.',
        }), {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}