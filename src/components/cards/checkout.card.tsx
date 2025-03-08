import { Product } from '@/src/modules/home/home.constants'
import React from 'react'
import { Image, Text, View } from 'react-native'

const CheckoutCard = ({ product }: { product: Product }) => {
    return (
        <View className="flex-row justify-between items-center border border-neutral-300 rounded-xl p-3">
            <View className="flex-row items-center gap-2">
                <Image
                    className="border border-neutral-300 rounded-full h-16 w-16"
                    source={require('@/src/assets/images/icon.png')}
                />
                <View className="">
                    <Text className="text-lg font-bold">{product.title}</Text>
                    <Text className="text-xs font-light">#7878-89</Text>
                </View>
            </View>
            <View className="gap-2">
                <Text className="font-bold">$29</Text>
                <Text className="text-xs">26 items</Text>
            </View>
        </View>
    )
}

export default CheckoutCard
