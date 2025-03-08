import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const HomeView = () => {
    return (
        <ScrollView className='flex-1'>
            <View className='p-6'>
                <Text className='text-yellow-700 text-5xl font-bold'>
                    Good Afternoon
                </Text>
                <Text className='text-xl font-bold'>
                    Hello, David
                </Text>
            </View>
        </ScrollView>
    );
}

export default HomeView;
