import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface MessagesHeaderProps {
    title: string;
    onBackPress?: () => void;
}

export const MessagesHeader: React.FC<MessagesHeaderProps> = ({
    title,
    onBackPress
}) => {
    return (
        <View className="pt-12 pb-4 px-5 bg-white">
            <View className="flex-row items-center">
                {onBackPress && (
                    <TouchableOpacity onPress={onBackPress} className="mr-4">
                        <Feather name="arrow-left" size={24} color="#4B5563" />
                    </TouchableOpacity>
                )}
                <Text className="text-2xl font-bold text-gray-900">
                    {title}
                </Text>
            </View>
        </View>
    );
};