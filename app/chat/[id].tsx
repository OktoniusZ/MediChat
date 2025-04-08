import React, { useState } from 'react';
import { ScrollView, View, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { DateSeparator } from '@/components/chat/DateSeparator';
import { MessageInput } from '@/components/chat/MessageInput';

const doctor = {
    id: 'doc-1',
    name: 'Nairobi Putri Hayza',
    role: 'Dokter Anak',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
};

const currentUserId = 'user-1';

const initialMessages = [
    {
        id: '1',
        senderId: 'user-1',
        content: 'Selamat pagi dok, anak saya demam sejak semalam',
        timestamp: '4.20 AM',
        status: 'read'
    },
    {
        id: '2',
        senderId: 'doc-1',
        content: 'Selamat pagi, berapa suhu tubuh anak ibu saat ini?',
        timestamp: '4.45 AM',
        status: 'read'
    },
    {
        id: '3',
        senderId: 'user-1',
        content: 'Suhunya 38.5 dok, sudah saya kompres tapi belum turun',
        timestamp: '5.15 AM',
        status: 'read'
    },
    {
        id: '4',
        senderId: 'doc-1',
        content: 'Baik, saya akan resepkan obat penurun panas. Apakah ada gejala lain seperti muntah atau diare?',
        timestamp: '5.30 AM',
        status: 'read'
    }
];

export default function ChatScreen() {
    const { id } = useLocalSearchParams();
    const [messages, setMessages] = useState(initialMessages);

    const handleSend = (newMessage: string) => {
        const newMsg = {
            id: Date.now().toString(),
            senderId: currentUserId,
            content: newMessage,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            status: 'sent'
        };
        setMessages([...messages, newMsg]);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            className="flex-1 bg-white"
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <ChatHeader recipient={doctor} />

            <ScrollView
                className="flex-1 px-4 pt-4"
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                <DateSeparator date="Senin, 21 Maret 2024" />

                {messages.map((message) => (
                    <MessageBubble
                        key={message.id}
                        message={{
                            content: message.content,
                            timestamp: message.timestamp,
                            isCurrentUser: message.senderId === currentUserId
                        }}
                        showAvatar={message.senderId !== currentUserId}
                        avatar={doctor.avatar}
                    />
                ))}
            </ScrollView>

            <MessageInput onSend={handleSend} />
        </KeyboardAvoidingView>
    );
}