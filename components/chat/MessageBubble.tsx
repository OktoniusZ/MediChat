import React from 'react';
import { View, Text, Image } from 'react-native';

interface MessageBubbleProps {
    message: {
        content: string;
        timestamp: string;
        isCurrentUser: boolean;
    };
    showAvatar?: boolean;
    avatar?: string;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
    message,
    showAvatar = false,
    avatar
}) => {
    return (
        <View className={`flex-row ${message.isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
            {showAvatar && !message.isCurrentUser && (
                <Image
                    source={{ uri: avatar }}
                    className="w-8 h-8 rounded-full mr-2 self-end mb-1"
                />
            )}

            <View className={`max-w-[80%] rounded-2xl p-3 ${message.isCurrentUser
                ? 'bg-[#4D55CC] rounded-br-none'
                : 'bg-[#4F959D] rounded-bl-none'
                }`}>
                <Text className={`text-sm ${message.isCurrentUser ? 'text-white' : 'text-white'
                    }`}>
                    {message.content}
                </Text>
                <Text className={`text-xs mt-1 ${message.isCurrentUser ? 'text-white' : 'text-white'
                    }`}>
                    {message.timestamp}
                </Text>
            </View>
        </View>
    );
};