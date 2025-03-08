import { Category } from '@/src/modules/home/home.constants'
import React from 'react'
import { Text, View } from 'react-native'

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <View className="border border-neutral-500 rounded-2xl py-4 px-8">
            <Text>{category.title}</Text>
        </View>
    )
}

export default CategoryCard
