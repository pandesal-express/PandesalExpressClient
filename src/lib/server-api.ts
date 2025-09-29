import axios, { AxiosHeaders, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type RawAxiosRequestHeaders } from 'axios';
import https from 'https';

export class ServerApi {
    private readonly api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: import.meta.env.PUBLIC_API_URL,
            httpsAgent: new https.Agent({
                rejectUnauthorized: false, // for dev only
            }),
            withCredentials: true, // Important for cookies
        });
    }

    public async request<T>(config: AxiosRequestConfig, token?: string): Promise<T> {
        try {
            const headers: RawAxiosRequestHeaders | AxiosHeaders = {...config.headers};
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            const response: AxiosResponse<T> = await this.api.request({
                method: config.method,
                url: `/api${config.url}`,
                data: config.data,
                headers: headers,
            });

            return response.data;
        } catch (error: any) {
            // check if error.response.data is object
            if (error.response?.data) {
                const errors = error.response.data;

                if (typeof errors === 'object') {
                    const errorMessages = Object.values(errors).flat();
                    throw new Error(errorMessages.join(', '));
                }

                // if it's an array or object
                if (Array.isArray(errors) || typeof errors === 'object') {
                    throw new Error(JSON.stringify(errors));
                }
            }

            console.error('Server API error:', error);

            throw new Error(
                error.response?.data.message ?? error.message,
            );
        }
    }
}

export const serverApi = new ServerApi();