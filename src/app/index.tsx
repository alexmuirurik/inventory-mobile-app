import { useCallback, useRef, useState } from "react"
import { Dimensions, RefreshControl, ScrollView, StyleSheet } from "react-native"
import WebView from "react-native-webview"
import { ShouldStartLoadRequest } from "react-native-webview/lib/WebViewTypes"

const HomeScreen = () => {
    const webViewRef = useRef<WebView>(null)
    const [refreshing, setRefreshing] = useState(false)
    const onRefresh = useCallback(() => {
        setRefreshing(true)
        webViewRef.current?.reload()
    }, [])

    const handleShouldStartLoad = (event: ShouldStartLoadRequest) => {
        const { url } = event
        if (
            url.startsWith("https://inventory-web-app-beige.vercel.app/") ||
            url.startsWith("https://accounts.google.com/v3/signin/")
        ) {
            return true
        }

        return false
    }
    return (
        <ScrollView
            style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <WebView
                ref={webViewRef}
                source={{ uri: "https://inventory-web-app-beige.vercel.app/" }}
                style={styles.container}
                onShouldStartLoadWithRequest={(e) => handleShouldStartLoad(e)}
                onLoadEnd={() => setRefreshing(false)}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
    },
})

export default HomeScreen
