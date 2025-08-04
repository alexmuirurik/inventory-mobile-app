import React, { useState } from 'react'
import CategoryView from '@/src/modules/categories/category.view'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'
import * as schema from '@/db/schema'
import { eq } from 'drizzle-orm'

const Category = () => {
    const { category } = useLocalSearchParams()
    const [search, setSearch] = useState('')
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: categor } = useQuery({
        queryKey: ['get-categories', category],
        queryFn: async () => {
            const categories = await drizzleDb.query.categories.findFirst({
                where: eq(schema.categories.id, Number(category as string)),
            })
            return categories
        },
    })

    const { data: products, isLoading } = useQuery({
        queryKey: ['get-products', category],
        queryFn: async () => {
            const prods = await drizzleDb.query.products.findMany({
                where: eq(
                    schema.products.categoryId,
                    Number(category as string)
                ),
            })
            return prods ? prods : []
        },
    })

    return (
        <CategoryView
            search={search}
            setSearch={setSearch}
            products={products}
            isLoading={isLoading}
            category={categor}
        />
    )
}

export default Category
