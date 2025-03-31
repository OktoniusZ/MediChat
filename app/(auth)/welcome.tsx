// app/(auth)/welcome.tsx
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { images } from '@/constants/images';

export default function WelcomeScreen() {
    return (
        <ImageBackground
            source={images.anime1}
            className="flex-1"
        >
            <View className="absolute inset-0 bg-black/50" />

            <View className="flex-1 p-6">
                <Text className='text-white text-12xl'>MediChat</Text>
                <Text className="mt-24 ml-4 text-white text-2xl font-semibold max-w-[80%]">
                    Konsultasi dengan dokter jadi lebih mudah & fleksibel
                </Text>

                {/* Buttons */}
                <View className="absolute bottom-16 left-0 right-0 px-6">
                    <Link href="/(auth)/signup" asChild>
                        <TouchableOpacity className="bg-cyan-500 py-3 rounded-full items-center mb-4">
                            <Text className="text-white font-bold text-lg">Sign Up</Text>
                        </TouchableOpacity>
                    </Link>

                    <Link href="/(auth)/signin" asChild>
                        <TouchableOpacity className="bg-white py-3 rounded-full items-center border border-gray-300">
                            <Text className="text-gray-800 font-bold text-base">Sign In</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </ImageBackground>
    );
}