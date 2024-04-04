"use client"

import { useItemsAxiosRequest } from "../../hooks/use-items-axios-request"
import { useItemsRequest } from "../../hooks/use-items-request"

export default function RowItemComponent() {
    const { data: dataWithFetch } = useItemsRequest()
    const { data: dataWithAxios } = useItemsAxiosRequest()

    const list1 = dataWithFetch?.data
    const list2 = dataWithAxios?.data

    return (
        <>
            <div className="p-4 rounded-xl bg-gray-100 mb-4">
                <div className="text-sm font-semibold text-black leading-8">Pemanggilan data menggunakan Axios</div>

                {Array.isArray(list1) && list1.length > 0 ? (
                    <>
                        <ul role="list" className="flex flex-col gap-2">
                            {list1.map((item) => {
                                return (
                                    <li key={item.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-200">{item.name}</li>
                                )
                            })}
                        </ul>
                    </>
                ) : null}
            </div>
        

            <div className="p-4 rounded-xl bg-gray-100">
                <div className="text-sm font-semibold text-black leading-8">Pemanggilan data menggunakan Axios</div>
                {Array.isArray(list2) && list2.length > 0 ? (
                    <>
                        <ul role="list" className="flex flex-col gap-2">
                            {list2.map((item) => {
                                return (
                                    <li key={item.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-200">{item.name}</li>
                                )
                            })}
                        </ul>
                    </>
                ) : null}
            </div>
        </>
    )
}