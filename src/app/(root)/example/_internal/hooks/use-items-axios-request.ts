import useSWRRequest from "@/main/lib/axios/use-swr";
import { ItemResponses } from "../use-cases/items/interface";

// Menggunakan axios
export function useItemsAxiosRequest() {
    const { data, ...rest } = useSWRRequest<ItemResponses>({
        url: "/api",
        params: { id: "Test" }
    })
    return { data, ...rest }
}