export type Link = {
    href?: string | null
    target?: "_self" | "_blank" | "_parent" | "_top" | "_unfencedTop"
    current?: boolean
}

export type Submenu = {
    id: string
    name: string
    link?: Link
    icon?: JSX.Element
    current?: boolean
    items: Submenu[]
}