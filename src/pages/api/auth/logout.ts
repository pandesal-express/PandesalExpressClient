import type { APIRoute } from "astro";
import type { FastApiResponse } from "@/types";
import { serverApi } from "@/lib/server-api.ts";

export const POST: APIRoute = async ({request, cookies, redirect}) => {
    const storeId = (await request.formData()).get("storeId");

    if (!storeId) {
        return new Response(JSON.stringify({
            message: 'Store ID is required.',
        }), {status: 400, headers: {'Content-Type': 'application/json'}});
    }

    try {
        const faceResponse = await serverApi.request<FastApiResponse>({
            baseURL: import.meta.env.PUBLIC_FASTAPI_URL,
            url: "/verify-face",
            method: "POST",
        });

        if (!faceResponse.success) {
            return new Response(JSON.stringify({
                message: faceResponse.message,
            }), {status: 401, headers: {'Content-Type': 'application/json'}});
        }

        await serverApi.request({
            url: '/auth/face-logout',
            method: 'POST',
            headers: {'Authorization': `Bearer ${faceResponse.data!.jwt_token}`},
            data: {userId: faceResponse.data!.userId},
        });

        cookies.delete('jwt_token', {path: '/'});
        cookies.delete('refresh_token', {path: '/api/Auth/refresh-token'});

        return redirect('/login?storeId=' + storeId, 303);
    } catch (e: any) {
        return new Response(JSON.stringify({
            message: e.message ?? 'Something went wrong. Please try again.',
        }), {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}