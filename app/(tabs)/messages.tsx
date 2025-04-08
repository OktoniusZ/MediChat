import React from 'react';
import { ScrollView, View } from 'react-native';
import { useRouter } from 'expo-router';
import { MessagesHeader } from '@/components/messages/MessagesHeader';
import { MessageCard } from '@/components/messages/MessageCard';

// Define mock messages data directly in the component file
const messages = [
    {
        id: '1',
        sender: {
            name: 'Dr. Sarah Johnson',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            role: 'Cardiologist'
        },
        lastMessage: 'Your test results came back normal. We can discuss...',
        time: '10:30 AM',
        unread: false
    },
    {
        id: '2',
        sender: {
            name: 'Dr. Michael Chen',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'General Practitioner'
        },
        lastMessage: 'Please remember to take your medication twice daily...',
        time: 'Yesterday',
        unread: true
    },
    {
        id: '3',
        sender: {
            name: 'Nurse Practitioner Amy',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            role: 'Nurse Practitioner'
        },
        lastMessage: 'Your appointment has been confirmed for next Tuesday...',
        time: 'Monday',
        unread: false
    }
];

export default function MessagesScreen() {
    const router = useRouter();

    return (
        <View className="flex-1 bg-white">
            <MessagesHeader title="Messages" />

            <ScrollView className="flex-1">
                {messages?.map((message) => (
                    <MessageCard
                        key={message.id}
                        message={message}
                        onPress={() => router.push(`/chat/${message.id}`)}
                    />
                ))}
            </ScrollView>
        </View>
    );
}