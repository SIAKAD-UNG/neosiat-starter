import { type Fetcher } from "swr"
import type { ItemResponses } from "./interface"

export const itemsFetcher: Fetcher<ItemResponses, string> = async (url) => {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Data tidak ditemukan");
    return await res.json()
}