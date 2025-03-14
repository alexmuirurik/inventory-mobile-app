import React from 'react'
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import CategoryIcon from '@/src/components/cards/category-icon'
import { Category } from '@/db/types'
import { router } from 'expo-router'

const IndexView = ({
    categories,
}: {
    categories: Category[] | undefined
}) => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-4 pb-16">
                <View>
                    <Text className="text-yellow-700 text-3xl font-bold">
                        Categories List
                    </Text>
                    <Text className="text-xs font-light">Good Afternoon</Text>
                </View>
                <View className="gap-4">
                    <TouchableOpacity
                        className="flex-row items-center gap-4 border border-teal-600 rounded-xl p-8"
                        onPress={() =>
                            router.navigate({
                                pathname:
                                    '/(dashboard)/products/categories/add-category',
                            })
                        }
                    >
                        <FontAwesome
                            name="folder-open-o"
                            size={25}
                            color={'#0d9488'}
                        />
                        <Text className="text-teal-600">Add Category</Text>
                    </TouchableOpacity>
                    {categories && (
                        <FlatList
                            contentContainerStyle={{
                                gap: 16,
                            }}
                            data={categories}
                            renderItem={({ item }) => (
                                <CategoryIcon category={item} />
                            )}
                            showsVerticalScrollIndicator={false}
                            scrollEnabled={false}
                        />
                    )}
                </View>
            </View>
        </ScrollView>
    )
}

export default IndexView
