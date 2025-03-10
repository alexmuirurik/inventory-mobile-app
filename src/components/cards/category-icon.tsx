import { Category } from '@/src/modules/home/home.constants'
import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'

const CategoryIcon = ({ category }: { category: Category }) => {
    return (
        <View className="flex-row items-center gap-4 border border-neutral-300 rounded-xl p-8">
            <FontAwesome name="folder-o" size={25} />
            <Text>{category.title}</Text>
        </View>
    )
}

export default CategoryIcon
