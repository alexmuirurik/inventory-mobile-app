import React from 'react'
import {
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { categories } from '../../home/home.constants'
import { FontAwesome } from '@expo/vector-icons'
import CategoryIcon from '@/src/components/cards/category-icon'

const IndexView = () => {
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
                    <TouchableOpacity>
                        <View className="flex-row items-center gap-4 border border-teal-600 rounded-xl p-8">
                            <FontAwesome
                                name="folder-open-o"
                                size={25}
                                color={'#0d9488'}
                            />
                            <Text className="text-teal-600">Add Category</Text>
                        </View>
                    </TouchableOpacity>

                    <FlatList
                        data={categories}
                        contentContainerStyle={{
                            gap: 16,
                        }}
                        renderItem={({ item }) => (
                            <CategoryIcon category={item} />
                        )}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default IndexView
