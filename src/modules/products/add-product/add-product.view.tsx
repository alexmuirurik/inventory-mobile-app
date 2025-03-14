import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { ScrollView, Text, TextInput } from 'react-native'
import { Image, TouchableOpacity, View } from 'react-native'
import { z } from 'zod'
import * as ImagePicker from 'expo-image-picker'
import { addProductSchema } from './add-product.constants'
import SelectForms from '@/src/components/forms/selectforms'
import { Category } from '@/db/types'

const AddProductView = ({
    categories,
    form,
}: {
    categories: Category[] | undefined
    form: UseFormReturn<z.infer<typeof addProductSchema>>
}) => {
    const [image, setImage] = useState<string | null>(null)
    const { control, formState } = form

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        console.log(result)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-6 pb-12">
                <TouchableOpacity
                    className="justify-center items-center gap-4 "
                    onPress={pickImage}
                >
                    <View className="justify-center items-center border border-neutral-300 rounded-xl p-8 w-full h-52">
                        <FontAwesome name="image" size={80} />
                    </View>
                    <View className="flex-row justify-between items-center gap-2">
                        <Text className="text-2xl text-yellow-700 font-bold">
                            Add Product Image
                        </Text>
                    </View>
                </TouchableOpacity>
                <View className="gap-2">
                    <Text className="text-sm">Product Name</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="name"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="Business Name"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Price</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="price"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    keyboardType="number-pad"
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="Price"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={String(value ?? 0)}
                                />
                            )}
                        />
                        <Controller
                            name="price"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="Units"
                                    keyboardType="number-pad"
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={String(value ?? 0)}
                                />
                            )}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Category</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="categoryId"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <SelectForms
                                    form={form}
                                    categories={categories}
                                    title="Select a Category"
                                />
                            )}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Description</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="status"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink text-start border border-neutral-300 rounded-xl max-w-full h-52 leading-5 p-4"
                                    style={{
                                        textAlignVertical: 'top',
                                    }}
                                    placeholder="Description"
                                    numberOfLines={16}
                                    multiline
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
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
