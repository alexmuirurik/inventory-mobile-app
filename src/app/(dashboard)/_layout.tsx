import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const DashboardLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#01884A',
                tabBarInactiveTintColor: 'teal',
                tabBarStyle: {
                    height: 60,
                    paddingTop: 5,
                    borderTopEndRadius: 20,
                    borderTopStartRadius: 20,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" size={25} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="products"
                options={{
                    title: 'Products',
                    href: {
                        pathname: '/(dashboard)/products',
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            name="shopping-bag"
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="sales"
                options={{
                    title: 'Sales',
                    href: {
                        pathname: '/(dashboard)/sales',
                    },
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="cart-plus" size={25} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome
                            name="user-secret"
                            size={25}
                            color={color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default DashboardLayout
