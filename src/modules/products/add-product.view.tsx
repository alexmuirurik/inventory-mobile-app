import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Controller, UseFormReturn } from 'react-hook-form'
import { ActivityIndicator, ScrollView, Text, TextInput } from 'react-native'
import { Image, TouchableOpacity, View } from 'react-native'
import { z } from 'zod'
import * as ImagePicker from 'expo-image-picker'
import SelectForms from '@/src/components/forms/selectforms'
import { Category } from '@/db/types'
import { addProductSchema } from '@/db/zod-schemas'

const AddProductView = ({
    isPending,
    addProduct,
    categories,
    form,
}: {
    isPending: boolean
    addProduct: (data: z.infer<typeof addProductSchema>) => any
    categories: Category[] | undefined
    form: UseFormReturn<z.infer<typeof addProductSchema>>
}) => {
    const [image, setImage] = useState<string | null>(null)
    const { control, formState } = form
    const isLoading = formState.isSubmitting || isPending

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: false,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.canceled) {
            form.setValue('image', result.assets[0].uri)
            setImage(result.assets[0].uri)
        }
    }

    return (
        <ScrollView
            className="bg-white flex-1 p-6 mt-6"
            contentContainerStyle={{ gap: 24, paddingBottom: 48 }}
        >
            <View className="flex-row justify-between items-center gap-2">
                <Text className="text-2xl text-yellow-700 font-bold">
                    {form.getValues('image') ? 'Edit' : 'Add'} Product
                </Text>
            </View>
            <View className="gap-2">
                <Text className="text-sm text-start">Product Image</Text>
                <TouchableOpacity
                    className="justify-center items-center border border-neutral-300 rounded-xl w-full aspect-video overflow-hidden"
                    onPress={pickImage}
                >
                    {form.getValues('image') ? (
                        <Image
                            className="w-full aspect-video"
                            src={form.getValues('image')}
                        />
                    ) : (
                        <View className=" p-8">
                            <FontAwesome name="image" size={80} />
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            <View className="gap-2">
                <Text className="text-sm">Product Name</Text>
                <View className="flex-row justify-between items-center gap-2">
                    <Controller
                        name="name"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
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
                        render={() => (
                            <TextInput
                                keyboardType="number-pad"
                                className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                placeholder="Price"
                                onChangeText={(text) =>
                                    form.setValue('price', Number(text))
                                }
                            />
                        )}
                    />
                </View>
            </View>
            <View className="gap-2">
                <Text className="text-sm">Stock</Text>
                <View className="flex-row justify-between items-center gap-2">
                    <Controller
                        name="stock"
                        control={control}
                        render={() => (
                            <TextInput
                                className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                placeholder="Units"
                                keyboardType="number-pad"
                                onChangeText={(text) =>
                                    form.setValue('stock', Number(text))
                                }
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
                        render={() => (
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
                        name="description"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
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
                <TouchableOpacity
                    className="bg-teal-600 hover:bg-teal-400 flex-row items-center justify-center gap-2 rounded-xl p-4 w-full"
                    onPress={form.handleSubmit(addProduct)}
                    disabled={isLoading}
                >
                    <Text className="text-center text-white text-xl font-bold">
                        Add Product
                    </Text>
                    {isLoading && <ActivityIndicator size={'large'} />}
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default AddProductView
