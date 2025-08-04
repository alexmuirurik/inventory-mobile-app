import React from 'react'
import { ActivityIndicator, ScrollView, Text, TextInput } from 'react-native'
import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Controller, UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { addCategorySchema } from '@/db/zod-schemas'

const AddCategoryView = ({
    form,
    createCategory,
    isPending,
}: {
    form: UseFormReturn<z.infer<typeof addCategorySchema>>
    createCategory: ({ name }: { name: string }) => any
    isPending: boolean
}) => {
    const {
        formState: {
            errors: { name },
        },
        control,
    } = form
    const isLoading =
        isPending ||
        !form.formState.isValid ||
        form.formState.isSubmitted ||
        form.formState.isSubmitting
    return (
        <ScrollView className="bg-white flex-1 p-6 mt-6">
            <View className="gap-8 pb-16">
                <View className="flex-row items-center gap-16 ">
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons
                            name="arrow-back"
                            size={20}
                            color={'#a16207'}
                        />
                    </TouchableOpacity>
                    <Text className="text-yellow-700 text-xl font-bold">
                        Add Category
                    </Text>
                </View>
                {name?.message && (
                    <View className="bg-red-600 p-3">
                        <Text className="text-white">{name.message}</Text>
                    </View>
                )}
                <View className="gap-2">
                    <Text className="text-neutral-400 text-lg font-semibold">
                        Category Name
                    </Text>
                    <Controller
                        name="name"
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                className={`border ${
                                    name?.message
                                        ? 'border-red-400'
                                        : 'border-neutral-400'
                                } rounded-xl w-full p-3`}
                                placeholder="Category Name"
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                    />
                </View>
                <View className="w-fit">
                    <TouchableOpacity
                        className={`${
                            isPending ? 'bg-neutral-600' : 'bg-teal-600'
                        } flex-row gap-2 rounded-xl py-4 px-8`}
                        onPress={form.handleSubmit(createCategory)}
                        disabled={isLoading}
                    >
                        {isLoading && <ActivityIndicator color={'white'} />}
                        <Text className="text-white text-center text-lg font-bold">
                            Create Category
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default AddCategoryView
