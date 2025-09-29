import type { APIRoute } from "astro";
import { serverApi } from "@/lib/server-api";
import type { ResponseProps } from "@/types";

export const POST: APIRoute = async ({request, cookies, redirect}) => {
    try {
        const data = await request.formData();
        const image = data.get("image")!;
        const storeId = data.get("storeId")!;

        const formData = new FormData();
        formData.append("Image", image);

        const response = await serverApi.request<ResponseProps>({
            url: "/Attendance/check-attendance",
            method: "POST",
            data: formData,
        });

        if (response.token && response.expiration) {
            cookies.set('jwt_token', response.token, {
                httpOnly: true,
                secure: false,
                sameSite: 'lax',
                path: '/',
                expires: new Date(response.expiration),
            });
        }

        // const url = new URL(request.url);
        // url.pathname = `/stores/${storeId}`;
        // return next(url);

        return redirect(`/stores/${storeId}`, 303);
    } catch (e: any) {
        console.error("Error checking attendance: ", e);
        return new Response(JSON.stringify({
            message: e.message ?? 'An internal error occurred.',
        }), {status: 500, headers: {'Content-Type': 'application/json'}});
    }
}