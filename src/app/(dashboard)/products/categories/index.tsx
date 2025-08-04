import IndexView from '@/src/modules/categories/index.view'
import { useQuery } from '@tanstack/react-query'
import * as schema from '@/db/schema'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'
import { useState } from 'react'

const Index = () => {
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: categories } = useQuery({
        queryKey: ['get-categories'],
        queryFn: async () => {
            const categories = await drizzleDb.query.categories.findMany()
            return categories
        },
    })
    return <IndexView categories={categories} />
}

export default Index
