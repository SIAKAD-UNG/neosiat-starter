import useSWR, { type SWRConfiguration, type SWRResponse } from "swr"
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import { axiosHttpPrivate } from "./instance"
// import { useAxios } from "./hooks/use-axios"

export type GetRequest = AxiosRequestConfig | null

interface Return<Data, Error>
    extends Pick<
        SWRResponse<AxiosResponse<Data>, AxiosError<Error>>,
        "isValidating" | "error" | "mutate" | "isLoading"
    > {
    data: AxiosResponse<Data> | undefined
}

export interface Config<Data = unknown, Error = unknown>
    extends Omit<
        SWRConfiguration<AxiosResponse<Data>, AxiosError<Error>>,
        "fallbackData"
    > {
    fallbackData?: Data
}

/**
 * Swr private request
 * @param request AxiosRequestConfig
 * @param param1 Config
 * @returns swr object
 */
export default function useSWRPrivateRequest<Data = unknown, Error = unknown>(
    request: GetRequest,
    { fallbackData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> {
    // const axiosHttpPrivate = useAxios()
    const {
        data,
        error,
        isValidating,
        isLoading,
        mutate,
        ...rest
    } = useSWR<AxiosResponse<Data>, AxiosError<Error>>(
        request,
        /**
         * NOTE: Typescript thinks `request` can be `null` here, but the fetcher
         * function is actually only called by `useSWR` when it isn't.
         */
        () => axiosHttpPrivate.request<Data>(request!),
        {
            ...config,
            fallbackData: fallbackData && {
                status: 200,
                statusText: "InitialData",
                config: request!,
                headers: {},
                data: fallbackData
            } as AxiosResponse<Data>
        }
    )

    return {
        data,
        error,
        isValidating,
        mutate,
        isLoading,
        ...rest
    }
}

export { useSWRPrivateRequest }