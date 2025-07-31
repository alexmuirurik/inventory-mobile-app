import { schema } from '@/db/types'
import SingleProductView from '@/src/modules/products/single-product.view'
import { useMutation, useQuery } from '@tanstack/react-query'
import { eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useLocalSearchParams } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'

const SingleProduct = () => {
    const { product } = useLocalSearchParams()
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema: schema })

    const { data: singleProduct, isLoading } = useQuery({
        queryKey: ['get-product', product],
        queryFn: async () => {
            const prod = await drizzleDb.query.products.findFirst({
                where: eq(schema.products.id, Number(product as string)),
            })
            return prod
        },
    })

    const {mutateAsync: addToCart} = useMutation({
        mutationKey: [''],
        mutationFn: async (productId: string) => {
                     
        }
    })

    return <SingleProductView isLoading={isLoading} product={singleProduct} />
}

export default SingleProduct
