import { Sale } from '@/db/types'
import React from 'react'
import { Image, Text, View } from 'react-native'

const SalesCard = ({ sale }: { sale: Sale }) => {
    const products = Object.values(sale.products ?? {})
    return (
        <View className="flex-row justify-between items-center border border-neutral-300 rounded-xl p-3">
            <View className="flex-row items-center gap-2">
                <Image
                    className="border border-neutral-300 rounded-full h-16 w-16"
                    source={require('@/src/assets/images/icon.png')}
                />
                <View className="">
                    <Text className="text-lg font-bold">{sale.createdAt}</Text>
                    <Text className="text-xs font-light">#7878-89</Text>
                </View>
            </View>
            <View className="gap-2">
                <Text className="font-bold">${90}</Text>
                <Text className="text-xs">
                    {products.length} items
                </Text>
            </View>
        </View>
    )
}

export default SalesCard
