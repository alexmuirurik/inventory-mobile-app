import React from 'react'
import {
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
} from 'react-native'
import { ScrollView, View } from 'react-native'
import { Sale } from '@/db/types'
import SalesCard from '@/src/components/cards/sales-card'
import { Ionicons } from '@expo/vector-icons'

const SalesView = ({
    isLoading,
    sales,
}: {
    isLoading: boolean
    sales: Sale[] | undefined
}) => {
    const checkoutCart = () => {}
    return (
        <View className="relative flex-1 h-screen w-screen">
            <TouchableOpacity
                className="bg-green-900 items-center justify-center absolute h-16 w-16 p-2 bottom-3 right-3 rounded-full z-50"
                onPress={checkoutCart}
            >
                <Ionicons name='cart' size={35} color={'white'} />
            </TouchableOpacity>
            <ScrollView className="bg-white flex-1 p-6">
                <View className="gap-4 mb-10">
                    <View>
                        <Text className="text-yellow-700 text-3xl font-bold">
                            Sales List
                        </Text>
                        <Text className="text-xs font-light">
                            Checkout Cart
                        </Text>
                    </View>
                    <View className="gap-4">
                        {isLoading && (
                            <ActivityIndicator
                                className="text-teal-600"
                                size={'large'}
                            />
                        )}
                        <View className="flex-row justify-between items-center">
                            <Text className="text-lg font-bold">Top Sales</Text>
                        </View>
                        <FlatList
                            contentContainerStyle={{
                                gap: 8,
                            }}
                            data={sales}
                            renderItem={({ item }) => <SalesCard sale={item} />}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SalesView
