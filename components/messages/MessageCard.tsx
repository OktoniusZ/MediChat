import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface MessageCardProps {
    message: {
        sender: {
            name: string;
            avatar: string;
            role?: string;
        };
        lastMessage: string;
        time: string;
        unread: boolean;
    };
    onPress?: () => void;
}

export const MessageCard: React.FC<MessageCardProps> = ({ message, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <View className="flex-row items-center py-4 px-5">
                <Image
                    source={{ uri: message.sender.avatar }}
                    className="w-14 h-14 rounded-full mr-4"
                />
                <View className="flex-1">
                    <View className="flex-row justify-between items-center mb-1">
                        <Text className="font-bold text-gray-900 text-base">
                            {message.sender.name}
                        </Text>
                        <Text className={`text-xs ${message.unread ? 'text-blue-500' : 'text-gray-400'}`}>
                            {message.time}
                        </Text>
                    </View>
                    <Text
                        className={`text-sm ${message.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}`}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {message.lastMessage}
                    </Text>
                </View>
            </View>
            <View className="border-b border-gray-100 mx-5" />
        </TouchableOpacity>
    );
};