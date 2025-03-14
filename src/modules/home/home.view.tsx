import { EvilIcons, FontAwesome, SimpleLineIcons } from '@expo/vector-icons'
import { Dispatch, SetStateAction } from 'react'
import {
    FlatList,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native'
import CategoryCard from '@/src/components/cards/category.card'
import { router } from 'expo-router'
import { Category, User } from '@/db/types'

const HomeView = ({
    user,
    categories,
    search,
    setSearch,
}: {
    user: User | undefined
    categories: Category[] | undefined
    search: string
    setSearch: Dispatch<SetStateAction<string>>
}) => {
    return (
        <ScrollView className="bg-white flex-1 p-6">
            <View className="gap-6">
                <View>
                    <Text className="text-yellow-700 text-3xl font-bold">
                        Hello, {user?.firstName ?? 'Nameless'}
                    </Text>
                    <Text className="text-xs font-light">Good Afternoon</Text>
                </View>
                <View className="flex-row justify-between items-center gap-2 w-full ">
                    <TextInput
                        className="border border-neutral-500 rounded-lg p-3 flex-1"
                        onChangeText={setSearch}
                        placeholder="Search Products"
                        value={search}
                    />
                    <EvilIcons
                        name="search"
                        className="font-light border border-neutral-500 rounded-lg p-3"
                        size={25}
                    />
                </View>
                <View className="flex-row justify-between items-center gap-4 flex-wrap">
                    <View className="flex-1 justify-center items-center border border-neutral-500 rounded-2xl p-10">
                        <Text className="text-sm font-light">
                            Total Revenue
                        </Text>
                        <Text className="text-2xl font-bold">$43,900</Text>
                    </View>
                    <View className="flex-1 justify-center items-center border border-neutral-500 rounded-2xl p-10">
                        <Text className="text-sm font-light">
                            Total Revenue
                        </Text>
                        <Text className="text-2xl font-bold">$43,900</Text>
                    </View>
                </View>
                <View className="flex-row justify-between items-center gap-4 flex-wrap">
                    <View className="flex-1 justify-center items-center border border-neutral-500 rounded-2xl p-10">
                        <Text className="text-sm font-light">
                            Total Revenue
                        </Text>
                        <Text className="text-2xl font-bold">$43,900</Text>
                    </View>
                    <View className="flex-1 justify-center items-center border border-neutral-500 rounded-2xl p-10">
                        <Text className="text-sm font-light">
                            Total Revenue
                        </Text>
                        <Text className="text-2xl font-bold">$43,900</Text>
                    </View>
                </View>
                <View className="gap-4">
                    <View className="flex-row justify-between items-center">
                        <Text className="text-lg font-bold">Categories</Text>
                        <TouchableOpacity
                            onPress={() =>
                                router.navigate({
                                    pathname:
                                        '/(dashboard)/products/categories',
                                })
                            }
                        >
                            <Text className="text-xs font-light">View All</Text>
                        </TouchableOpacity>
                    </View>
                    {categories && (
                        <FlatList
                            contentContainerStyle={{
                                gap: 8,
                            }}
                            data={categories}
                            renderItem={({ item }) => (
                                <CategoryCard category={item} />
                            )}
                            showsHorizontalScrollIndicator={false}
                            horizontal
                        />
                    )}
                </View>
                <TouchableOpacity
                    onPress={() =>
                        router.navigate({
                            pathname: '/(dashboard)/products/add-product',
                        })
                    }
                >
                    <View className="justify-center items-center border border-teal-600 rounded-xl p-8 px-16 gap-6">
                        <View className="flex-row items-baseline gap-1">
                            <SimpleLineIcons
                                name="plus"
                                size={18}
                                color={'#0d9488'}
                            />
                            <Text className="text-2xl text-teal-600 font-bold">
                                Add Product
                            </Text>
                        </View>
                        <Text className="text-sm font-light">
                            Click here to add products to your catalog. We'll
                            store your product locally for you to access
                            anywhere
                        </Text>
                        <SimpleLineIcons
                            name="plus"
                            size={50}
                            color={'#0d9488'}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default HomeView
