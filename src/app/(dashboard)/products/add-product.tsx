import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import * as schema from '@/db/schema'
import { useSQLiteContext } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'
import { addProductSchema } from '@/db/zod-schemas'
import AddProductView from '@/src/modules/products/add-product.view'

const AddProduct = () => {
    const queryClient = useQueryClient()
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema })

    const { data: categories } = useQuery({
        queryKey: ['get-categories'],
        queryFn: async () => {
            const categories = await drizzleDb.query.categories.findMany()
            return categories
        },
    })

    const { mutate: addProduct, isPending } = useMutation({
        mutationKey: ['add-product'],
        mutationFn: async (data: z.infer<typeof addProductSchema>) => {
            const product = await drizzleDb.insert(schema.products).values(data)
            return product
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['get-products']})
            router.navigate({
                pathname: '/(dashboard)/products'
            })
        },
        onError: (err) => {
            console.log(err)
        }
    })

    const form = useForm<z.infer<typeof addProductSchema>>({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            status: 'in-stock'
        }
    })

    return (
        <AddProductView
            isPending={isPending}
            addProduct={addProduct}
            categories={categories}
            form={form}
        />
    )
}

export default AddProduct
