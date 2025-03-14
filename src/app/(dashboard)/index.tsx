import { useState } from 'react'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'
import * as schema from '@/db/schema'
import { useQuery } from '@tanstack/react-query'
import HomeView from '@/src/modules/home/home.view'

const IndexScreen = () => {
    const [search, setSearch] = useState('')
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: user } = useQuery({
        queryKey: ['get-user'],
        queryFn: async () => {
            const user = await drizzleDb.query.users.findFirst()
            return user
        },
    })

    const { data: categories } = useQuery({
        queryKey: ['get-categories'],
        queryFn: async () => {
            const categories = await drizzleDb.query.categories.findMany()
            return categories
        },
    })

    return (
        <HomeView
            categories={categories}
            user={user}
            search={search}
            setSearch={setSearch}
        />
    )
}

export default IndexScreen
