import { z } from "zod";

export const addCategorySchema = z.object({
    name: z.string()
})

export const addProductSchema = z.object({
    name: z.string(),
    price: z.number().min(1),
    stock: z.number().min(1),
    image: z.string(),
    description: z.string(),
    status: z.string(),
    categoryId: z.number(),
})
