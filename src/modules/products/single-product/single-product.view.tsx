import { Entypo, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native'
import { ScrollView, View } from 'react-native'
import { router } from 'expo-router'
import { Product } from '@/db/types'

const SingleProductView = ({
    isLoading,
    product,
}: {
    isLoading: boolean
    product: Product | undefined
}) => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            {!product ? (
                <ActivityIndicator
                    className="flex-row justify-center items-center"
                    size={'large'}
                />
            ) : (
                <View className="gap-4 pb-12">
                    <View className="flex-row justify-between items-center gap-4">
                        <TouchableOpacity onPress={() => router.back()}>
                            <Entypo
                                size={35}
                                name="chevron-with-circle-left"
                                color={'#a3a3a3'}
                            />
                        </TouchableOpacity>

                        <Text className="text-yellow-700 text-3xl font-bold">
                            {product.name.slice(0, 20)}
                        </Text>
                    </View>
                    <View className="justify-center items-center border border-neutral-300 rounded-xl w-full aspect-video overflow-hidden">
                        {product?.image ? (
                            <Image
                                className="w-full aspect-video"
                                src={product.image}
                            />
                        ) : (
                            <View className=" p-8">
                                <FontAwesome name="image" size={80} />
                            </View>
                        )}
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">NAME</Text>
                        <Text className="text-neutral-400">{product.name}</Text>
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">
                            DESCRIPTION
                        </Text>
                        <Text className="text-neutral-400" selectable>
                            {product?.description}   
                        </Text>
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">PRICE</Text>
                        <Text className="text-neutral-400">{product.price.toLocaleString()} Ksh</Text>
                    </View>
                    <View className="gap-4">
                        <Text className="text-lg font-semibold">STOCK</Text>
                        <Text className="text-neutral-400">{product?.stock?.toLocaleString()} Items</Text>
                    </View>
                    <View>
                        <TouchableOpacity className="bg-blue-600 rounded-xl p-4 w-full">
                            <Text className="text-center text-white font-bold">
                                Add to Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </ScrollView>
    )
}

export default SingleProductView
