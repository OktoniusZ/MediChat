import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ProfileAvatar } from './ProfileAvatar';

interface ProfileHeaderProps {
  title: string;
  name: string;
  email: string;
  phone: string;
  avatarUri: string;
  isEditing?: boolean;
  onBackPress: () => void;
  onEditPress: () => void;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  title,
  name,
  email,
  phone,
  avatarUri,
  isEditing = false,
  onBackPress,
  onEditPress,
}) => (
  <View className="px-6 pt-12 pb-6 bg-white shadow-sm">
    <View className="flex-row justify-between items-center mb-6">
      <TouchableOpacity onPress={onBackPress}>
        <Feather name="arrow-left" size={24} color="#4B5563" />
      </TouchableOpacity>
      <Text className="text-xl font-bold text-gray-900">{title}</Text>
      <TouchableOpacity onPress={onEditPress}>
        <Text className="text-blue-500 font-medium">
          {isEditing ? 'Save' : 'Edit'}
        </Text>
      </TouchableOpacity>
    </View>

    <View className="items-center">
      <ProfileAvatar 
        avatarUri={avatarUri} 
        editable={isEditing} 
        onEditPress={onEditPress}
      />
      <View className="items-center">
        <Text className="text-2xl font-bold text-gray-900 mb-1">{name}</Text>
        <Text className="text-gray-600">{email}</Text>
        <Text className="text-gray-600 mt-1">{phone}</Text>
      </View>
    </View>
  </View>
);