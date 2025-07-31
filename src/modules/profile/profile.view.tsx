import { updateProfileSchema } from '@/db/schemas'
import { User } from '@/db/types'
import { Controller, UseFormReturn } from 'react-hook-form'
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import { z } from 'zod'

const ProfileView = ({
    isPending,
    form,
    user,
    isLoading,
    updateUser,
}: {
    isPending: boolean
    form: UseFormReturn<z.infer<typeof updateProfileSchema>>
    user: User | null | undefined
    isLoading: boolean
    updateUser: (data: any) => any
}) => {
    const { control } = form
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-8">
                <View className="justify-center items-center gap-4 ">
                    <Image
                        className="border border-neutral-300 rounded-full p-4 h-32 w-32 "
                        source={require('@/src/assets/images/icon.png')}
                    />
                    <View className="flex-row justify-between items-center gap-2">
                        <Text className="text-2xl text-yellow-700 font-bold">
                            {form.getValues('firstName') ?? 'First'}
                        </Text>
                        <Text className="text-2xl text-yellow-700 font-bold">
                            {form.getValues('lastName') ?? 'Name'}
                        </Text>
                    </View>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="firstName"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="First Name"
                                    onChangeText={(text) =>
                                        form.setValue('firstName', text)
                                    }
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />

                        <Controller
                            name="lastName"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="Last Name"
                                    onChangeText={(text) =>
                                        form.setValue('lastName', text)
                                    }
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Business Name</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="businessName"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="Business Name"
                                    onChangeText={(text) =>
                                        form.setValue('businessName', text)
                                    }
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className="text-sm">Location</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <Controller
                            name="location"
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <TextInput
                                    className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                                    placeholder="Business Location"
                                    onChangeText={(text) =>
                                        form.setValue('location', text)
                                    }
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                </View>
                <View className="gap-2 justify-self-end">
                    <TouchableOpacity
                        className={`${
                            isLoading || isPending
                                ? 'bg-neutral-600'
                                : 'bg-teal-600'
                        } hover:bg-teal-400 rounded-xl p-4 w-full`}
                        disabled={isLoading || isPending}
                    >
                        <Text className="text-center text-white text-xl font-bold">
                            {user ? 'Update' : 'Create'} Profile
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileView
