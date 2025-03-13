const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname, { isCSSEnabled: true })

config.resolver.sourceExts.push('sql')

module.exports = withNativeWind(config, { input: './src/assets/css/global.css' })