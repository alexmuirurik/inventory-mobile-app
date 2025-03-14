import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { Category } from '@/db/types'
import { router } from 'expo-router'

const CategoryIcon = ({ category }: { category: Category }) => {
    return (
        <TouchableOpacity
            key={category.id}
            className="flex-row items-center gap-4 border border-neutral-300 rounded-xl p-8"
            onPress={() =>
                router.navigate({
                    pathname: '/(dashboard)/products/categories/[category]',
                    params: {
                        category: category.id,
                    },
                })
            }
        >
            <FontAwesome name="folder-o" size={25} />
            <Text>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryIcon
