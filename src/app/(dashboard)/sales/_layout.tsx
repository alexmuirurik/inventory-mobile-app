import { Stack } from 'expo-router'

const SalesLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="sale"
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}

export default SalesLayout
