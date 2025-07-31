import React, { Dispatch, SetStateAction } from 'react'
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Category, Product } from '@/db/types'
import ProductCard from '@/src/components/cards/product.card'

const CategoryView = ({
    isLoading,
    products,
    search,
    setSearch,
    category,
}: {
    isLoading: boolean
    products: Product[] | undefined
    search: string
    setSearch: Dispatch<SetStateAction<string>>
    category: Category | undefined
}) => {
    return (
        <ScrollView className="bg-white flex-1 p-6 mt-6">
            <View className="gap-4 pb-12">
                <View>
                    <Text className="text-yellow-700 text-3xl font-bold">
                        Product List
                    </Text>
                    <Text className="text-xs font-light">
                        {category?.name} Category
                    </Text>
                </View>
                <View className="flex-row justify-between items-center gap-2 w-full ">
                    <TextInput
                        className="border border-neutral-500 rounded-lg p-3 flex-1"
                        onChangeText={setSearch}
                        placeholder="Search Products"
                        value={search}
                    />
                    <TouchableOpacity
                        onPress={() =>
                            router.navigate({
                                pathname: '/(dashboard)/products/add-product',
                            })
                        }
                    >
                        <Ionicons
                            name="scan-outline"
                            className="font-light border border-neutral-500 rounded-lg p-2"
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View className="gap-4">
                    {isLoading && (
                        <ActivityIndicator
                            className="text-teal-600"
                            size={'large'}
                        />
                    )}
                    <View className="flex-row justify-between items-center">
                        <Text className="text-lg font-bold">Top Products</Text>
                    </View>
                    <FlatList
                        contentContainerStyle={{
                            gap: 8,
                        }}
                        data={products}
                        renderItem={({ item }) => (
                            <ProductCard product={item} />
                        )}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default CategoryView
