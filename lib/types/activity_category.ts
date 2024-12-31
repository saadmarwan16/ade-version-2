import { z } from "zod"

export const ActivityCategorySchema = z.object({
  data: z.array(
    z.object({
      id: z.number(),
      documentId: z.string(),
      title: z.string(),
      color: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
      publishedAt: z.string(),
      locale: z.string()
    })
  )
})

export type TActivityCategory = z.infer<typeof ActivityCategorySchema>
