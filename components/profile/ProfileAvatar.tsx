import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface ProfileAvatarProps {
    avatarUri: string;
    editable?: boolean;
    onEditPress?: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
    avatarUri,
    editable = false,
    onEditPress
}) => (
    <View className="relative mb-4">
        <Image
            source={{ uri: avatarUri }}
            className="w-24 h-24 rounded-full border-2 border-white shadow"
        />
        {editable && (
            <TouchableOpacity
                className="absolute bottom-0 right-0 bg-blue-500 p-2 rounded-full"
                onPress={onEditPress}
            >
                <Feather name="camera" size={16} color="white" />
            </TouchableOpacity>
        )}
    </View>
);