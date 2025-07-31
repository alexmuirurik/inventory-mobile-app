import { DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { Suspense, useEffect } from 'react'
import 'react-native-reanimated'
import { useColorScheme } from '../hooks/useColorScheme.web'
import { ActivityIndicator, StatusBar } from 'react-native'
import { openDatabaseSync, SQLiteProvider } from 'expo-sqlite'
import { drizzle } from 'drizzle-orm/expo-sqlite'
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import migrations from '@/drizzle/migrations'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '@/src/assets/css/global.css'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
    const myDB = openDatabaseSync('inventory')
    const db = drizzle(myDB)
    const { success } = useMigrations(db, migrations)

    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        nunito: require('@/src/assets/fonts/Nunito-Regular.ttf'),
        spaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    useEffect(() => {
        if (success) {
        }

        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded, success])

    if (!loaded) {
        return null
    }

    return (
        <ThemeProvider value={DefaultTheme}>
            <Suspense
                fallback={
                    <ActivityIndicator
                        size="large"
                        className="h-screen w-screen text-teal-600"
                    />
                }
            >
                <QueryClientProvider client={new QueryClient()}>
                    <SQLiteProvider
                        databaseName="inventory"
                        options={{ enableChangeListener: true }}
                        useSuspense
                    >
                        <Stack>
                            <Stack.Screen
                                name="(dashboard)"
                                options={{ headerShown: false }}
                            />
                        </Stack>
                        <StatusBar
                            barStyle="dark-content"
                            backgroundColor={'white'}
                            
                        />
                    </SQLiteProvider>
                </QueryClientProvider>
            </Suspense>
        </ThemeProvider>
    )
}
