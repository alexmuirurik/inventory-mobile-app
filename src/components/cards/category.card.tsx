import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Category } from '@/db/types'
import { router } from 'expo-router'

const CategoryCard = ({ category }: { category: Category }) => {
    return (
        <TouchableOpacity
            key={category.id}
            className="border border-neutral-500 rounded-2xl py-4 px-8"
            onPress={() =>
                router.navigate({
                    pathname: '/(dashboard)/products/categories/[category]',
                    params: {
                        category: category.id,
                    },
                })
            }
        >
            <Text>{category.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
