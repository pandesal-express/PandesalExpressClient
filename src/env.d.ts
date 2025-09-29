/// <reference types="astro/client" />

interface Env {
    readonly PUBLIC_API_URL: string;
}

declare namespace App {
    interface Locals {
        user?: {
            id: string;
            departmentId: string;
            storeId?: string;
            email: string;
            firstName: string;
            lastName: string;
            position: string;
            sssNumber?: string;
            philhealthNumber?: string;
            tinNumber?: string;
            pagIbigNumber?: string;
            department?: {
                id: string;
                name: string;
            };
        };
        token?: string;
        error?: string;
    }
}

