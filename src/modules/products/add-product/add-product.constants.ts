import { z } from 'zod'

export const addProductSchema = z.object({
    id: z.number(),
    name: z.string(),
    price: z.number(),
    stock: z.number(),
    image: z.string(),
    status: z.string(),
    categoryId: z.number()
})
