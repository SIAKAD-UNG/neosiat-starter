import { z } from "zod"

export async function teFetcher<ZSchema extends z.ZodSchema>(
    url: string,
    schema: ZSchema
): Promise<z.infer<ZSchema>> {
    const res = await fetch(url)
    if (!res.ok) throw new Error("Something error")
    return schema.parse(await res.json())
}