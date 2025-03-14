import React from 'react'
import { Text, View } from 'react-native'
import { Category } from '@/db/types'

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <View
            key={category.id}
            className="border border-neutral-500 rounded-2xl py-4 px-8"
        >
            <Text>{category.name}</Text>
        </View>
    )
}

export default CategoryCard
