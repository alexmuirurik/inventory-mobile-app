import { addToCartSchema } from '@/db/schemas'
import { schema } from '@/db/types'
import SingleProductView from '@/src/modules/products/single-product.view'
import { useMutation, useQuery } from '@tanstack/react-query'
import { and, eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useLocalSearchParams } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import z from 'zod'

const SingleProduct = () => {
    const { product } = useLocalSearchParams()
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema: schema })

    const { data: sale, isFetching: isSaleFetching } = useQuery({
        queryKey: ['get-pending-sale'],
        queryFn: async () => {
            try {
                const sale = await drizzleDb.query.sales.findFirst({
                    where: eq(schema.sales.status, 'pending'),
                })
                return Promise.resolve(sale)
            } catch (error) {
                return Promise.reject(error)
            }
        },
    })

    const { data: checkoutItems, isFetching: isCheckoutFetching } = useQuery({
        queryKey: ['get-pending-sale-checkout-item'],
        queryFn: async () => {
            try {
                const checkoutItems =
                    await drizzleDb.query.checkoutItems.findMany({
                        where: eq(schema.checkoutItems.saleId, sale?.id ?? -1),
                    })
                return Promise.resolve(checkoutItems)
            } catch (error) {
                return Promise.reject(error)
            }
        },
    })

    const { data: singleProduct, isFetching } = useQuery({
        queryKey: ['get-product', product],
        queryFn: async () => {
            try {
                const prod = await drizzleDb.query.products.findFirst({
                    where: eq(schema.products.id, Number(product as string)),
                })
                return Promise.resolve(prod)
            } catch (error) {
                return Promise.reject(error)
            }
        },
    })

    const { mutateAsync: addToCart } = useMutation({
        mutationKey: ['add-to-cart-mutate'],
        mutationFn: async (data: z.infer<typeof addToCartSchema>) => {
            try {
                const sale = await drizzleDb.query.sales.findFirst({
                    where: eq(schema.sales.status, 'pending'),
                })
                const checkoutItem = checkoutItems?.find(
                    (checkoutItem) =>
                        checkoutItem.productId === Number(product as string)
                )
                if (sale && checkoutItem) {
                    const updateCheckoutItem = await drizzleDb
                        .update(schema.checkoutItems)
                        .set({
                            id: checkoutItem.id,
                            noOfItems: data.noOfItems,
                            totalAmount: data.totalAmout,
                        })
                    return Promise.resolve(updateCheckoutItem)
                }

                if (sale && !checkoutItem) {
                    const checkoutItem = await drizzleDb
                        .insert(schema.checkoutItems)
                        .values({
                            saleId: sale.id,
                            productId: data.productId,
                            noOfItems: data.noOfItems,
                            totalAmount: data.totalAmout,
                            status: 'added',
                        })
                    return Promise.resolve(checkoutItem)
                }
            } catch (error) {
                return Promise.reject(error)
            }
        },
    })

    return (
        <SingleProductView
            isLoading={isFetching}
            product={singleProduct}
            addToCart={addToCart}
            checkoutItems={checkoutItems}
        />
    )
}

export default SingleProduct
