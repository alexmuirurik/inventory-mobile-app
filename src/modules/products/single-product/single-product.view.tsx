import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { ScrollView, View } from 'react-native'
import { categories } from '../../home/home.constants'
import { router } from 'expo-router'

const SingleProductView = () => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-4 pb-12">
                <View className="flex-row justify-between items-center gap-4">
                    <TouchableOpacity onPress={() => router.navigate('/products')}>
                        <Entypo
                            size={35}
                            name="chevron-with-circle-left"
                            color={'#a3a3a3'}
                        />
                    </TouchableOpacity>

                    <Text className="text-yellow-700 text-3xl font-bold">
                        Single Product
                    </Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <View className="gap-2 w-1/5 h-full">
                        <Image
                            className="border border-neutral-300 rounded-xl h-16 object-fill w-full p-2"
                            source={require('@/src/assets/images/product/women-1.jpg')}
                        />
                        <Image
                            className="border border-neutral-300 rounded-xl h-16 object-fill w-full p-2"
                            source={require('@/src/assets/images/product/women-2.jpg')}
                        />
                        <Image
                            className="border border-neutral-300 rounded-xl h-16 object-fill w-full p-2"
                            source={require('@/src/assets/images/product/women-3.png')}
                        />
                    </View>
                    <View className="w-4/5">
                        <Image
                            className="border border-neutral-300 rounded-xl object-cover h-64 w-full"
                            source={require('@/src/assets/images/product/women-1.jpg')}
                        />
                    </View>
                </View>
                <View className="gap-4">
                    <Text className="text-lg font-semibold">SIZE</Text>
                    <FlatList
                        contentContainerStyle={{
                            gap: 8,
                        }}
                        data={categories}
                        renderItem={({ item, index }) => (
                            <View className="flex-1 border border-neutral-300 rounded-xl py-2 px-6">
                                <Text>3{index}</Text>
                            </View>
                        )}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                    />
                </View>
                <View className="gap-4">
                    <Text className="text-lg font-semibold">DESCRIPTION</Text>
                    <Text className="text-neutral-400" selectable>
                        We empower companies to seamlessly integrate positive
                        impact into what they do through a unified platform
                        while supporting nonprofits in gaining access to
                        cutting-edge technology and finding new funding streams.
                        Global brands including LinkedIn, HSBC, OpenAI,
                        Atlassian and Twilio - as well as thousands of
                        nonprofits including the Red Cross, Cancer Research, and
                        Oxfam - use Goodstack to make a difference.
                    </Text>
                    <Text className="text-neutral-400" selectable>
                        We empower companies to seamlessly integrate positive
                        impact into what they do through a unified platform
                        while supporting nonprofits in gaining access to
                        cutting-edge technology and finding new funding streams.
                        Global brands including LinkedIn, HSBC, OpenAI,
                        Atlassian and Twilio - as well as thousands of
                        nonprofits including the Red Cross, Cancer Research, and
                        Oxfam - use Goodstack to make a difference.
                    </Text>
                </View>
                <View className="gap-4">
                    <Text className="text-lg font-semibold">PRICE</Text>
                    <Text className="text-neutral-400">$890.90</Text>
                </View>
                <View>
                    <TouchableOpacity className="bg-blue-600 rounded-xl p-4 w-full">
                        <Text className="text-center text-white font-bold">
                            Add to Cart
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default SingleProductView
