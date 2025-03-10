import { Stack } from 'expo-router'
import React from 'react'

const ProductsLayout = () => {
    return (
        <Stack >
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="add-product"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name='categories'
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='[product]'
                options={{
                    headerShown: false
                }}
            />
        </Stack>
    )
}

export default ProductsLayout
