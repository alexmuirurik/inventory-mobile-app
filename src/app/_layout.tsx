import { Stack } from "expo-router"
import { StatusBar } from "react-native"
import "react-native-reanimated"

export const unstable_settings = { anchor: "index" }

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    contentStyle: {
                        paddingTop: 10,
                        paddingBottom: 10,
                    },
                }}
            />
            <Stack.Screen
                name="modal"
                options={{
                    presentation: "modal",
                    title: "Modal",
                }}
            />
            <StatusBar barStyle="dark-content" />
        </Stack>
    )
}

export default RootLayout
