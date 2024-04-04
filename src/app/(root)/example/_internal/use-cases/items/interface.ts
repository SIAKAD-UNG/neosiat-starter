import { z } from "zod"
import { ItemResponsesSchema } from "./schema"

export type ItemResponses = z.infer<typeof ItemResponsesSchema>