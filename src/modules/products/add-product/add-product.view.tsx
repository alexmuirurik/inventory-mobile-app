import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'

const AddProductView = () => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-6 pb-12">
                <View className="justify-center items-center gap-4 ">
                    <View className="justify-center items-center border border-neutral-300 rounded-xl p-8 w-full h-52">
                        <FontAwesome name="image" size={80} />
                    </View>
                    <View className="flex-row justify-between items-center gap-2">
                        <Text className="text-2xl text-yellow-700 font-bold">
                            Add Product Image
                        </Text>
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Product Name</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder="Business Name"
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Price</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder="Price"
                            onChangeText={(text) => console.log(text)}
                        />
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder="Units"
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Category</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder="Category"
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Description</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink text-start border border-neutral-300 rounded-xl max-w-full h-52 leading-5 p-4"
                            style={{
                                textAlignVertical: 'top',
                            }}
                            placeholder="Description"
                            onChangeText={(text) => console.log(text)}
                            numberOfLines={16}
                            multiline
                        />
                    </View>
                </View>
                <View className="gap-2 justify-self-end">
                    <TouchableOpacity className="bg-teal-600 hover:bg-teal-400 rounded-xl p-4 w-full">
                        <Text className="text-center text-white text-xl font-bold">
                            Add Product
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default AddProductView
