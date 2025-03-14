import React from 'react'
import CategoryView from '@/src/modules/categories/category/category.view'
import { useLocalSearchParams } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'
import * as schema from '@/db/schema'
import { eq } from 'drizzle-orm'

const Category = () => {
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })
    const { category } = useLocalSearchParams()

    const { data: categor } = useQuery({
        queryKey: ['get-categories', category],
        queryFn: async () => {
            const categories = await drizzleDb.query.categories.findFirst({
                where: eq(schema.categories.id, Number(category as string)),
            })
            return categories
        },
    })

    return <CategoryView category={categor} />
}

export default Category
