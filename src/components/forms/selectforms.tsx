import SelectDropdown from 'react-native-select-dropdown'
import Icon from '@expo/vector-icons/MaterialCommunityIcons'
import { StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { Category } from '@/db/types'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { addProductSchema } from '@/src/modules/products/add-product/add-product.constants'
import { useState } from 'react'

const SelectForms = ({
    title,
    form,
    categories,
}: {
    title: string
    form: UseFormReturn<z.infer<typeof addProductSchema>>
    categories: Category[] | undefined
}) => {
    const [selectedOne, setSelectedOne] = useState<any>()
    return (
        <SelectDropdown
            data={categories ?? []}
            onSelect={(selectedItem, index) => {
                setSelectedOne(selectedItem)
                form.setValue('categoryId', selectedItem.id)
            }}
            renderButton={(selectedItem, isOpened) => {
                return (
                    <View className="flex-row items-center gap-1 border border-neutral-400 rounded-xl w-full p-3">
                        <Text>
                            {(selectedItem && selectedItem.name) || title}
                        </Text>
                        <Icon
                            className="ms-auto"
                            name={isOpened ? 'chevron-up' : 'chevron-down'}
                            size={20}
                        />
                    </View>
                )
            }}
            renderItem={(item, isSelected) => {
                return (
                    <View
                        className={`${
                            isSelected ? 'bg-neutral-300' : 'bg-neutral-100'
                        } flex-row items-center gap-1 border border-neutral-200 p-3 w-full`}
                    >
                        <Text>{item.name}</Text>
                    </View>
                )
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    )
}

export default SelectForms

const styles = StyleSheet.create({
    dropdownMenuStyle: {
        backgroundColor: 'white',
        borderRadius: 8,
    },
})
