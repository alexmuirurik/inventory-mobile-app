import { useColorScheme } from "@/src/hooks/use-color-scheme"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import "react-native-reanimated"

export const unstable_settings = { anchor: "index" }

const RootLayout = () => {
    const colorScheme = useColorScheme()

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
                name="modal"
                options={{ presentation: "modal", title: "Modal" }}
            />
            <StatusBar style='dark' />
        </Stack>
    )
}

export default RootLayout
