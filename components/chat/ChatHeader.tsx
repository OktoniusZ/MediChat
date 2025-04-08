import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface ChatHeaderProps {
    recipient: {
        name: string;
        role: string;
        avatar: string;
    };
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ recipient }) => {
    const router = useRouter();

    return (
        <View className="bg-blue-600 pb-4 rounded-b-3xl pt-12 px-4">
            <View className="flex-row items-center justify-between">
                <TouchableOpacity onPress={() => router.back()}>
                    <Feather name="arrow-left" size={24} color="white" />
                </TouchableOpacity>

                <View className="items-center">
                    <Text className="text-white font-bold text-lg">{recipient.name}</Text>
                    <Text className="text-blue-100 text-sm">{recipient.role}</Text>
                </View>

                <Image
                    source={{ uri: recipient.avatar }}
                    className="w-10 h-10 rounded-full border-2 border-white"
                />
            </View>
        </View>
    );
};