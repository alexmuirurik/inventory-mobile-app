import React from 'react'
import { FlatList, Text } from 'react-native'
import { ScrollView, View } from 'react-native'
import { products } from '../../home/home.constants'
import CheckoutCard from '@/src/components/cards/checkout.card'
import { TouchableOpacity } from 'react-native'

const SalesView = () => {
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
            </View>
        </ScrollView>
    )
}

export default SalesView
