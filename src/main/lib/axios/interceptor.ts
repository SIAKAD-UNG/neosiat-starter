import type { AxiosInstance } from "axios";

export const addBaseInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use((config: any) => {
        console.log("config", config)
        if (config.headers === undefined) {
            config.headers = {};
        }

        config.headers = {
            ...config.headers,
            /* add authorization headers etc.*/
        };

        return config;
    });
};
