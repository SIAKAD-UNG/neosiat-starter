import { z } from "zod"

export const FormValueExampleSchema = z.object({
    username: z.string(),
})