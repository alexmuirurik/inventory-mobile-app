import { EvilIcons, Ionicons } from '@expo/vector-icons'
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
import ProductCard from '@/src/components/cards/product.card'
import { Product } from '@/db/types'
import { router } from 'expo-router'

const ProductsView = ({
    isLoading,
    products,
    search,
    setSearch,
}: {
    isLoading: boolean
    products: Product[] | undefined
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}) => {
    const createProduct = () => {
        router.navigate({
            pathname: '/(dashboard)/products/add-product',
        })
    }

    const createCategory = () => {
        router.navigate({
            pathname: '/(dashboard)/products/categories/add-category',
        })
    }
    return (
        <View className="relative flex-1">
            <TouchableOpacity
                className="bg-green-900 items-center justify-center absolute h-16 w-16 bottom-3 right-3 rounded-full z-50"
                onPress={createProduct}
            >
                <Ionicons name="add" size={45} color={'white'} />
            </TouchableOpacity>
            <ScrollView className="bg-white flex-1 p-6">
                <View className="gap-4 pb-12">
                    <View>
                        <Text className="text-yellow-700 text-3xl font-bold">
                            Products List
                        </Text>
                        <TouchableOpacity onPress={createCategory}>
                            <Text className="text-xs font-light">
                                Add Category
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-between items-center gap-2 w-full ">
                        <TextInput
                            className="border border-neutral-500 rounded-lg p-3 flex-1"
                            onChangeText={setSearch}
                            placeholder="Search Products"
                            value={search}
                        />
                        <TouchableOpacity>
                            <Ionicons
                                name="search-sharp"
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
                            <Text className="text-lg font-bold">
                                Top Products
                            </Text>
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
        </View>
    )
}

export default ProductsView
