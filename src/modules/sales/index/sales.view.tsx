import React from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { ScrollView, View } from 'react-native'
import { Sale } from '@/db/types'
import SalesCard from '@/src/components/cards/sales-card'

const SalesView = ({
    isLoading,
    sales,
}: {
    isLoading: boolean
    sales: Sale[] | undefined
}) => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-8 mb-10">
                <View>
                    <Text className="text-yellow-700 text-3xl font-bold">
                        Checkout
                    </Text>
                    <Text className="text-xs font-light">Good Afternoon</Text>
                </View>
                <View className="gap-4">
                    {isLoading && (
                        <ActivityIndicator
                            className="text-teal-600"
                            size={'large'}
                        />
                    )}
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
    )
}

export default SalesView
