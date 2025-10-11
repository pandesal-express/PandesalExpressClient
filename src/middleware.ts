import { defineMiddleware } from "astro/middleware";
import { serverApi } from "@/lib/server-api";
import type { AuthResponse, Employee } from "@/types";

const PUBLIC_ROUTES = ['/login', '/register', '/attendance'];

export const onRequest = defineMiddleware(async (context, next) => {
    const url = new URL(context.request.url);

    // check if the url is /api/*
    if (PUBLIC_ROUTES.some(route => url.pathname.startsWith(route))) {
        return next();
    }

    // check if the url has storeId in searchParams
    const storeId = url.searchParams.get('storeId');

    if (!storeId) {
        context.locals.error = 'Please use the bookmarked/saved link to access your Store';

        url.pathname = '/login';
        context.url = url;

        return await next("/login");
    }

    // Get token from cookies
    const token = context.cookies.get('jwt_token')?.value;

    console.log('Token:', token);

    if (!token) {
        url.pathname = "/login";
        url.searchParams.set('storeId', storeId!);
        context.url = url;

        return await next(url);
    }

    try {
        console.log('\nFetching user data...');

        const user = await serverApi.request<Employee>({
            method: 'GET',
            url: '/auth/me',
            headers: {'Authorization': `Bearer ${token}`},
        });

        if (!user) {
            console.log('User data not fetched. Refreshing token...');

            const refreshResponse = await serverApi.request<AuthResponse>({
                url: '/auth/refresh-token',
                method: 'POST',
                headers: {'Authorization': `Bearer ${token}`},
            });

            if (!refreshResponse) {
                console.log('Refresh token failed');

                context.cookies.delete('jwt_token', {path: '/'});
                context.cookies.delete('refresh_token', {path: '/api/Auth/refresh-token'});
                context.cookies.delete('auth_status', {path: '/'});
                context.locals.error = 'Session expired. Please check in again.';

                return next(url);
            }

            if (refreshResponse.token) {
                console.log('Setting new token in cookies...');

                context.cookies.set('jwt_token', refreshResponse.token, {
                    httpOnly: true,
                    secure: false,
                    sameSite: 'lax',
                    path: '/',
                    expires: new Date(refreshResponse.expiration),
                });
            }

            context.locals.user = refreshResponse.user;
            context.locals.token = refreshResponse.token;

            return await next();
        }

        context.locals.user = user;
        context.locals.token = token;

        if (user.department) {
            if (user.department.name === 'Store Operations') {
                const storeId = url.searchParams.get('storeId');

                url.pathname = `stores/${storeId!}`;
            } else {
                url.pathname = 'stores';
            }
        }

        return await next(url);
    } catch (error) {
        console.error('Authentication error:', error);

        context.cookies.delete('jwt_token');
        context.cookies.delete('refresh_token');
        return await next(url);
    }
});