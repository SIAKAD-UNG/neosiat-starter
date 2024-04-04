"use client"

import { SWRConfig } from "swr"

export default function SWRConfigProvider({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <SWRConfig
            value={{
                revalidateIfStale: false,
                revalidateOnFocus: false,
                revalidateOnReconnect: false,
            }}
        >
            {children}
        </SWRConfig>
    )
}
