import { z } from "zod"

export const ItemResponsesSchema = z.object({
    data: z.object({
        id: z.string(),
        name: z.string(),
        ho_hp: z.string().nullable(),
    }).array(),
})