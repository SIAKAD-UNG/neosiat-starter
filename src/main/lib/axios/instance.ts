import axiosHttp from "axios"
import { addBaseInterceptors } from "./interceptor"

function createInstance() {
    const axios = axiosHttp.create()
    addBaseInterceptors(axios)
    return axios
}

export const axios = createInstance()