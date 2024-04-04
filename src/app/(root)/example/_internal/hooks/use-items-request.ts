import useSWR from "swr"
import { itemsFetcher } from "../use-cases/items"

export function useItemsRequest() {
    const { data, isLoading, ...rest} = useSWR("/api", itemsFetcher)
    return { data, isLoading, ...rest }
}
