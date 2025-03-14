import React from 'react'
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Category } from '@/db/types'

const CategoryView = ({ category }: { category: Category | undefined }) => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-8 pb-16">
                <View className="flex-row items-center gap-16 ">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons
                            name="arrow-back"
                            size={20}
                            color={'#a16207'}
                        />
                    </TouchableOpacity>
                    <Text className="text-yellow-700 text-xl font-bold">
                        Edit Category
                    </Text>
                </View>
                <View className="gap-2">
                    <Text className="text-neutral-400 text-lg font-semibold">
                        Category Name
                    </Text>
                    <TextInput
                        className="border border-neutral-400 rounded-xl w-full p-3"
                        placeholder="Category Name"
                        value={category?.name}
                    />
                </View>
                <View className="w-fit">
                    <TouchableOpacity className="bg-teal-600 rounded-xl py-4 px-8">
                        <Text className="text-white text-center text-lg font-bold">
                            Edit Category
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default CategoryView
