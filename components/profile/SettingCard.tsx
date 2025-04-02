import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface SettingItemProps {
  icon: React.ReactNode;
  label: string;
  onPress?: () => void;
}

export const SettingsCard: React.FC = () => (
  <View className="mx-6 my-4 bg-white rounded-xl p-5 shadow-sm">
    <Text className="text-lg font-bold text-gray-900 mb-4">Settings</Text>
    
    <View className="space-y-3">
      <SettingItem 
        icon={<Feather name="shield" size={20} color="#4B5563" />}
        label="Privacy Settings"
      />
      
      <SettingItem 
        icon={<Feather name="bell" size={20} color="#4B5563" />}
        label="Notification Preferences"
      />
      
      <SettingItem 
        icon={<Feather name="help-circle" size={20} color="#4B5563" />}
        label="Help & Support"
      />
    </View>
  </View>
);

const SettingItem: React.FC<SettingItemProps> = ({ icon, label, onPress }) => (
  <TouchableOpacity 
    className="flex-row items-center justify-between py-3"
    onPress={onPress}
  >
    <View className="flex-row items-center">
      <View style={{ width: 20, marginRight: 12 }}>
        {icon}
      </View>
      <Text className="text-gray-700">{label}</Text>
    </View>
    <Feather name="chevron-right" size={20} color="#9CA3AF" />
  </TouchableOpacity>
);