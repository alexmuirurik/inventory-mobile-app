import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import AddProductView from '@/src/modules/products/add-product/add-product.view'
import { z } from 'zod'
import * as schema from '@/db/schema'
import { addProductSchema } from '@/src/modules/products/add-product/add-product.constants'
import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useQuery } from '@tanstack/react-query'

const AddProduct = () => {
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: categories } = useQuery({
        queryKey: ['get-categories'],
        queryFn: async () => {
            const categories = await drizzleDb.query.categories.findMany()
            return categories
        },
    })
    const form = useForm<z.infer<typeof addProductSchema>>({
        resolver: zodResolver(addProductSchema),
    })
    return <AddProductView categories={categories} form={form} />
}

export default AddProduct
