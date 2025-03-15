import React from 'react'
import {
    Button,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { products } from '../../home/home.constants'
import CheckoutCard from '@/src/components/cards/checkout.card'

const SaleView = () => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-8 mb-10">
                <View>
                    <Text className="text-yellow-700 text-3xl font-bold">
                        Checkout
                    </Text>
                    <Text className="text-xs font-light">Good Afternoon</Text>
                </View>
                <FlatList
                    contentContainerStyle={{
                        gap: 8,
                    }}
                    data={products}
                    renderItem={({ item }) => <CheckoutCard product={item} />}
                    showsVerticalScrollIndicator={false}
                    scrollEnabled={false}
                />
                <View className="gap-3">
                    <View className="flex-row justify-between items-center">
                        <Text className="font-semibold">
                            {'Subtotal'.toUpperCase()}
                        </Text>
                        <Text className="font-semibold">$24.50</Text>
                    </View>
                    <View className="flex-row justify-between items-center">
                        <Text className="font-light">{'Delivery'}</Text>
                        <Text className="font-light">$24</Text>
                    </View>
                    <View className="flex-row justify-between items-center">
                        <Text className="text-xl font-bold">
                            {'Total'.toUpperCase()}
                        </Text>
                        <Text className="text-xl font-bold">$24.50</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity className="bg-teal-700 hover:bg-teal-500 rounded-xl w-full p-4">
                        <Text className="text-white text-center text-lg font-bold">
                            Complete Checkout
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SaleView
