import type { APIRoute } from "astro";
import type { AuthResponse } from "@/types";
import { serverApi } from "@/lib/server-api";

export const POST: APIRoute = async ({request, cookies, redirect, locals}) => {
    try {
        const data = await request.formData();
        const storeId = data.get("storeId")!;

        const response = await serverApi.request<AuthResponse>({
            baseURL: import.meta.env.PUBLIC_FASTAPI_URL,
            url: "/register-face",
            method: "POST",
            data: data,
        });

        cookies.set('jwt_token', response.token, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/',
            expires: new Date(response.expiration),
        });

        cookies.set('refresh_token', response.refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/api/auth/refresh-token',
            expires: new Date(response.refreshTokenExpiration),
        });

        locals.user = response.user;
        locals.token = response.token;

        const url = new URL(request.url);
        const user = response.user;

        if (user.department) {
            url.pathname = user.department.name === 'Store Operations' ? `/stores/${storeId}` : '/stores';
        }

        return redirect(url.pathname, 303);
    } catch (e: any) {
        console.error("Error registering: ", e);
        return new Response(JSON.stringify({
            message: e.message ?? 'An internal error occurred.',
        }), {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}