import React from 'react';
import { View, Text } from 'react-native';

export const DateSeparator: React.FC<{ date: string }> = ({ date }) => {
    return (
        <View className="flex-row items-center my-4">
            <View className="flex-1 h-px bg-gray-300" />
            <Text className="text-gray-500 text-sm mx-2">{date}</Text>
            <View className="flex-1 h-px bg-gray-300" />
        </View>
    );
};