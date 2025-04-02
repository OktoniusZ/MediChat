import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface ActionButtonProps {
    label: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary';
    className?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
    label,
    onPress,
    variant = 'primary',
    className = ''
}) => (
    <TouchableOpacity
        className={`py-4 rounded-xl items-center mb-3 ${variant === 'primary'
                ? 'bg-blue-500'
                : 'border border-gray-200'
            } ${className}`}
        onPress={onPress}
    >
        <Text className={`font-medium ${variant === 'primary'
                ? 'text-white'
                : 'text-red-500'
            }`}>
            {label}
        </Text>
    </TouchableOpacity>
);