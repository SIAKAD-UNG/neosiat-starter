import { z } from "zod"
import { FormValueExampleSchema } from "./schema"

export type FormValueExample = z.infer<typeof FormValueExampleSchema>