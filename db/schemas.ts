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

export const updateProfileSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    businessName: z.string(),
    location: z.string(),
})

export const addToCartSchema = z.object({
    productId: z.number(),
    noOfItems: z.number(),
    totalAmout: z.number(),
})
