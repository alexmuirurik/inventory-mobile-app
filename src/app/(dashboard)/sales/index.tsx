import { schema } from '@/db/types'
import SalesView from '@/src/modules/sales/sales.view'
import { useQuery } from '@tanstack/react-query'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useSQLiteContext } from 'expo-sqlite'

const SalesScreen = () => {
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema: schema })
    const { isFetching, data: sales } = useQuery({
        queryKey: ['get-sales'],
        queryFn: async () => {
            try {
                const sales = await drizzleDb.query.sales.findMany()
                return Promise.resolve(sales ? sales : [])
            } catch (error) {
                return Promise.reject(error)
            }
        },
    })
    
    return <SalesView isLoading={isFetching} sales={sales} />
}

export default SalesScreen
