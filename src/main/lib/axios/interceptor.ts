// import { getAccessToken, getRoleAccess } from "@/main/utils"
import { type AxiosInstance } from "axios"

export const addBasePrivateInterceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use((config) => {
        // const accessToken = getAccessToken()
        // const roleAccess = getRoleAccess()
        // config.headers["Authorization"] = `Bearer ${accessToken}`
        // config.headers["X-App-Role"] = roleAccess.toString()

        return config
    })

    instance.interceptors.response.use((config) => {
        return config
    }, (error) => {
        if (error.response.status === 403)  {
            window.location.href= "/403"
        }

        return Promise.reject(error)
    })
}
