import { Entypo, FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native'
import { ScrollView, View } from 'react-native'
import { router } from 'expo-router'
import { CheckoutItem, Product } from '@/db/types'
import z from 'zod'
import { addToCartSchema } from '@/db/zod-schemas'

const SingleProductView = ({
    isLoading,
    product,
    checkoutItems,
    addToCart,
}: {
    isLoading: boolean
    product: Product | undefined
    checkoutItems: CheckoutItem[] | undefined
    addToCart: (data: z.infer<typeof addToCartSchema>) => void
}) => {
    const [dialogOpen, setDialogOpen] = useState()
    return (
        <ScrollView
            className="bg-white flex-1 p-6 mt-6"
            contentContainerStyle={{
                gap: 32,
                paddingBottom: 12,
            }}
        >
            {!product ? (
                <ActivityIndicator
                    className="flex-row justify-center items-center"
                    size={'large'}
                />
            ) : (
                <View className="gap-8 pb-12">
                    <View className="flex-row justify-between items-center gap-4">
                        <Text className="text-yellow-700 text-3xl font-bold">
                            {product.name.slice(0, 20)}
                        </Text>
                    </View>
                    <View className="justify-center items-center border border-neutral-300 rounded-xl w-full aspect-video overflow-hidden">
                        {product?.image ? (
                            <Image
                                className="w-full aspect-video"
                                src={product.image}
                            />
                        ) : (
                            <View className=" p-8">
                                <FontAwesome name="image" size={80} />
                            </View>
                        )}
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">NAME</Text>
                        <Text className="text-neutral-400">{product.name}</Text>
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">
                            DESCRIPTION
                        </Text>
                        <Text className="text-neutral-400" selectable>
                            {product?.description}
                        </Text>
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">PRICE</Text>
                        <Text className="text-neutral-400">
                            {product.price.toLocaleString()} Ksh
                        </Text>
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">STOCK</Text>
                        <Text className="text-neutral-400">
                            {product?.stock?.toLocaleString()} Items
                        </Text>
                    </View>
                    <View className="flex-row gap-2 w-full">
                        <TouchableOpacity
                            className="border border-green-700 rounded-xl p-4 w-1/2 "
                            onPress={() => router.back()}
                        >
                            <Text className="text-center text-black font-bold">
                                Back
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="bg-green-700 rounded-xl p-4 w-1/2">
                            <Text className="text-center text-white font-bold">
                                Add to Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default SingleProductView
