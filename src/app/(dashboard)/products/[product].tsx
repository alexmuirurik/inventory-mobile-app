import { addToCartSchema } from '@/db/zod-schemas'
import { schema } from '@/db/types'
import SingleProductView from '@/src/modules/products/single-product.view'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { and, eq } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useLocalSearchParams } from 'expo-router'
import { useSQLiteContext } from 'expo-sqlite'
import z from 'zod'

const SingleProduct = () => {
    const { product } = useLocalSearchParams()
    const database = useSQLiteContext()
    const drizzleDb = drizzle(database, { schema: schema })
    const queryClient = useQueryClient()

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

    const { data: checkoutItems, isFetching: isCheckoutFetching } = useQuery({
        queryKey: ['get-pending-sale-checkout-item'],
        queryFn: async () => {
            try {
                const cartItems = await drizzleDb.query.cartItems.findMany()
                return Promise.resolve(cartItems)
            } catch (error) {
                return Promise.reject(error)
            }
        },
    })

    const { mutateAsync: addToCart, isPending: isCartPending } = useMutation({
        mutationKey: ['add-to-cart-mutate'],
        mutationFn: async (data: z.infer<typeof addToCartSchema>) => {
            try {
                const cartItem = await drizzleDb.query.cartItems.findFirst({
                    where: eq(schema.cartItems.productId, data.productId),
                })

                if (cartItem) {
                    const updateCartItem = await drizzleDb
                        .update(schema.cartItems)
                        .set({
                            id: cartItem.id,
                            noOfItems: data.noOfItems,
                            totalAmount: data.totalAmout,
                        })
                    return Promise.resolve(updateCartItem)
                }

                const createCartItem = await drizzleDb
                    .insert(schema.cartItems)
                    .values(data)
                console.log(createCartItem)

                return Promise.resolve(createCartItem)
            } catch (error) {
                console.log(error)
                return Promise.reject(error)
            }
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries()
        },
    })

    return (
        <SingleProductView
            isLoading={isFetching || isCheckoutFetching || isCartPending}
            product={singleProduct}
            addToCart={addToCart}
            checkoutItems={checkoutItems}
        />
    )
}

export default SingleProduct
