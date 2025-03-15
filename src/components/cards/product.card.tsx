import { Product } from '@/db/types'
import { router } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Image, View } from 'react-native'

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <TouchableOpacity
            className="w-full"
            onPress={() =>
                router.navigate({
                    pathname: '/(dashboard)/products/[product]',
                    params: {
                        product: product.id ?? '',
                    },
                })
            }
        >
            <View className="flex-row justify-between items-center border border-neutral-300 rounded-2xl p-2">
                <View className="flex-row items-center gap-3">
                    <Image
                        className="border border-gray-200 rounded-full p-2 h-16 w-16"
                        src={product.image ?? ''}
                    />
                    <View className="gap-2 ">
                        <Text className="font-bold">{product.name}</Text>
                        <Text className="text-xs capitalize">{product.status?.replaceAll('-', ' ')}</Text>
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="font-bold">
                        {product.price.toLocaleString()} Ksh
                    </Text>
                    <Text className="text-xs">{product.stock} items</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard
