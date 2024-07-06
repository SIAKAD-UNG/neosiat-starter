import axiosHttpInstance, { type AxiosInstance, type AxiosStatic } from "axios"
import { addBasePrivateInterceptors } from "./interceptor"

/**
 * Create private instance
 * @param axiosInstance AxiosStatic
 * @returns AxiosInstance
 */
function createPrivateInstance(axiosInstance: AxiosStatic) {
    const creeateInstance: AxiosInstance = axiosInstance.create()
    addBasePrivateInterceptors(creeateInstance)
    return creeateInstance
}

/**
 * Create public axios instance
 * @param axiosInstance AxiosStatic
 * @returns AxiosInstance
 */
function createInstance(axiosInstance: AxiosStatic) {
    const createInstance: AxiosInstance = axiosInstance.create()
    return createInstance
}

/**
 * Axios http
 * Instance tidak memiliki settingan custom
 * Gunakan untuk mengakses api public
 */
export const axiosHttp = createInstance(axiosHttpInstance)

/**
 * Axios HTTP private
 * Gunakan untuk mengakses http dengan custom header
 */
export const axiosHttpPrivate = createPrivateInstance(axiosHttpInstance)
