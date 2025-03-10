import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

const ProfileView = () => {
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
                            David
                        </Text>
                        <Text className="text-2xl text-yellow-700 font-bold">
                            Chenga
                        </Text>
                    </View>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder='First Name'
                            onChangeText={(text) => console.log(text)}
                        />
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder='Last Name'
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className='text-sm'>Business Name</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder='Business Name'
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                <View className="gap-2">
                    <Text className='text-sm'>Location</Text>
                    <View className="flex-row justify-between items-center gap-2">
                        <TextInput
                            className="flex-grow flex-shrink border border-neutral-300 rounded-xl max-w-full p-4"
                            placeholder='Business Location'
                            onChangeText={(text) => console.log(text)}
                        />
                    </View>
                </View>
                <View className="gap-2 justify-self-end">
                    <TouchableOpacity className='bg-teal-600 hover:bg-teal-400 rounded-xl p-4 w-full'>
                        <Text className='text-center text-white text-xl font-bold'>Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProfileView
