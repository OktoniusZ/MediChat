import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface MessageInputProps {
    onSend: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage('');
        }
    };

    return (
        <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-2 mx-4 mb-4">
            <TextInput
                className="flex-1 text-gray-800 py-2"
                placeholder="Tulis pesan..."
                placeholderTextColor="#9CA3AF"
                value={message}
                onChangeText={setMessage}
                multiline
            />
            <TouchableOpacity
                onPress={handleSend}
                disabled={!message.trim()}
                className={`p-2 rounded-full ${message.trim() ? 'bg-blue-500' : 'bg-gray-300'}`}
            >
                <Feather name="send" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};