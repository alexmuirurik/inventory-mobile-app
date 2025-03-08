import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { useColorScheme } from '../hooks/useColorScheme.web'
import { StatusBar } from 'react-native'
import '@/src/assets/css/global.css'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        nunito: require('@/src/assets/fonts/Nunito-Regular.ttf'),
        spaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <ThemeProvider
            value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Stack>
                <Stack.Screen
                    name="(dashboard)"
                    options={{ headerShown: false }}
                />
            </Stack>
            <StatusBar barStyle="dark-content" backgroundColor={'white'} />
        </ThemeProvider>
    )
}
