import { useState } from 'react'
import ProductsView from '@/src/modules/products/index/products.view'
import { useQuery } from '@tanstack/react-query'
import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { schema } from '@/db/types'

const IndexScreen = () => {
    const [search, setSearch] = useState('')
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema: schema })

    const { data: products, isLoading } = useQuery({
        queryKey: ['get-products'],
        queryFn: async () => {
            const prods = await drizzleDb.query.products.findMany()
            return prods ? prods : []
        },
    })

    return (
        <ProductsView
            isLoading={isLoading}
            products={products}
            search={search}
            setSearch={setSearch}
        />
    )
}

export default IndexScreen
