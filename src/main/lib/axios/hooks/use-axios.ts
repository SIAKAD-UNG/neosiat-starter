"use client"

import { useEffect } from "react"
import { axiosHttp } from "../instance"

export const useAxios = () => {
    useEffect(() => {
        const requestIntercept = axiosHttp.interceptors.request.use((config) => {
            // config.headers = config.headers || {}
            // config.headers["Authorization"] = `Bearer ${authState.accessToken}`
            // config.headers["X-App-Role"] = authState.primaryRole
            return config
        }, (error) => Promise.reject(error))

        const responseIntercept = axiosHttp.interceptors.response.use((config) => config, (error) => {
            if (error.response.status === 403)  {
                window.location.href= "/403"
            }
    
            return Promise.reject(error)
        })

        return () => {
            axiosHttp.interceptors.request.eject(requestIntercept)
            axiosHttp.interceptors.response.eject(responseIntercept)
        }
    }, [])
    // }, [authState])

    return axiosHttp
}