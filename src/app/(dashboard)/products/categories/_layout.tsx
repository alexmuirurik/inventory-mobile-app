import { Stack } from 'expo-router'
import React from 'react'

const CategoriesLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="[category]"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="add-category"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default CategoriesLayout
