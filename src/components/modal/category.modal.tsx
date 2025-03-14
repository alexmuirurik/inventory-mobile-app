import React, { Dispatch, SetStateAction } from 'react'
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native'

const CategoryModal = ({
    showModal,
    setShowModal,
}: {
    showModal: boolean
    setShowModal: Dispatch<SetStateAction<boolean>>
}) => {
    return (
        <Modal transparent className="flex-1 h-screen w-screen " visible>
            <View className="absolute items-center h-screen w-screen p-6 top-40">
                <View className="bg-white border border-neutral-600 rounded-xl h-72 w-full">
                    <View className='justify-between gap-5 p-6'>
                        <Text className="text-2xl text-yellow-700 font-bold">
                            Create Category
                        </Text>
                        <TextInput
                            className="text-lg border border-neutral-600 rounded-xl w-full p-4"
                            placeholder="Category Name"
                        />
                        <TouchableOpacity className="bg-teal-600 rounded-xl py-4 px-16 w-fit">
                            <Text className="text-white text-center text-lg font-bold">
                                Create Category
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default CategoryModal
