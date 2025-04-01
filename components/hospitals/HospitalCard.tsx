import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Hospital } from "../../types";
import { images } from "@/constants/images";

interface HospitalCardProps {
    hospital: Hospital;
}

export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() => router.push(`/hospital/${hospital.id}`)}
            activeOpacity={0.8}
        >
            <View className="mb-6">
                <View className="flex-row">
                    <Image
                        source={hospital.image}
                        className="w-20 h-20 rounded-lg mr-4"
                    />
                    <View className="flex-1">
                        <Text className="font-bold text-lg text-gray-800">
                            {hospital.name}
                        </Text>
                        <Text className="text-gray-500 mt-1">{hospital.address}</Text>
                    </View>
                </View>
                <View className="border-b border-gray-100 mt-4" />
            </View>
        </TouchableOpacity>
    );
};