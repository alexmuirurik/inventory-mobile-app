import { EvilIcons } from '@expo/vector-icons'
import React, { Dispatch, SetStateAction } from 'react'
import { FlatList, ScrollView, Text, TextInput, View } from 'react-native'
import { categories, products } from '../home/home.constants'
import ProductCard from '@/src/components/cards/product.card'
import CategoryCard from '@/src/components/cards/category.card'

const ProductsView = ({
    search,
    setSearch,
}: {
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}) => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-4 pb-12">
                <View>
                    <Text className="text-yellow-700 text-3xl font-bold">
                        Products List
                    </Text>
                    <Text className="text-xs font-light">Good Afternoon</Text>
                </View>
                <View className="flex-row justify-between items-center gap-2 w-full ">
                    <TextInput
                        className="border border-neutral-500 rounded-lg p-3 flex-1"
                        onChangeText={setSearch}
                        placeholder="Search Products"
                        value={search}
                    />
                    <EvilIcons
                        name="search"
                        className="font-light border border-neutral-500 rounded-lg p-3"
                        size={25}
                    />
                </View>
                <View className="gap-4">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-lg font-bold">
                            Top Categories
                        </Text>
                        <Text className="text-xs font-light">View All</Text>
                    </View>
                    <FlatList
                        contentContainerStyle={{
                            gap: 8,
                        }}
                        data={categories}
                        renderItem={({ item }) => (
                            <CategoryCard category={item} />
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </View>
                <View className="gap-4">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-lg font-bold">Top Products</Text>
                        <Text className="text-xs font-light">View All</Text>
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

export default ProductsView
