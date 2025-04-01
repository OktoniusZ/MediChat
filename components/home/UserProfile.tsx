import { View, Text, Image } from 'react-native';
import { images } from '@/constants/images';

type UserProfileProps = {
    name: string;
    role: string;
    image: any;
};

export default function UserProfile({ name, role, image }: UserProfileProps) {
    return (
        <View className="flex-row items-center mb-6">
            <Image source={image} className="w-16 h-16 rounded-full" />
            <View className="ml-4">
                <Text className="text-lg font-bold">{name}</Text>
                <Text className="text-gray-500">{role}</Text>
            </View>
        </View>
    );
}