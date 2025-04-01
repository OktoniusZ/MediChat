import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { hospitals } from "../../app/data/hospitals";
import { Feather, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { useRouter } from 'expo-router';

export default function HospitalDetails() {
    const { id } = useLocalSearchParams();
    const hospital = hospitals.find(h => h.id.toString() === id);
    const router = useRouter();

    if (!hospital) {
        return (
            <View className="flex-1 items-center justify-center bg-white">
                <Text className="text-lg text-gray-500">Hospital not found</Text>
            </View>
        );
    }

    const handleCall = () => {
        if (hospital.phone) {
            Linking.openURL(`tel:${hospital.phone.replace(/[^0-9]/g, '')}`);
        }
    };

    const handleNavigation = () => {
        // This would open in Google Maps or Apple Maps
        const address = encodeURIComponent(hospital.address);
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${address}`);
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            {/* Hero Image with Gradient Overlay */}
            <View className="relative h-72">
                <Image
                    source={{ uri: hospital.image }}
                    className="w-full h-full"
                />
                <View className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
            </View>

            {/* Floating Header */}
            <View className="absolute top-12 left-4 right-4 flex-row justify-between items-center">
                <TouchableOpacity
                    className="bg-white/90 p-2 rounded-full"
                    onPress={() => router.push('../hospitals')}
                >
                    <Feather name="arrow-left" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity className="bg-white/90 p-2 rounded-full">
                    <Feather name="share-2" size={20} color="black" />
                </TouchableOpacity>
            </View>

            {/* Main Content Card */}
            <View className="-mt-8 bg-white rounded-t-3xl px-6 pt-6 pb-8 shadow-lg">
                <View className="flex-row justify-between items-start mb-4">
                    <Text className="text-3xl font-bold text-gray-900 flex-1">
                        {hospital.name}
                    </Text>
                    <View className="bg-blue-100 px-3 py-1 rounded-full flex-row items-center ml-4">
                        <MaterialIcons name="star" size={16} color="#3B82F6" />
                        <Text className="text-blue-600 font-medium ml-1">4.8</Text>
                    </View>
                </View>

                <View className="flex-row items-center mb-6">
                    <FontAwesome5 name="map-marker-alt" size={16} color="#EF4444" />
                    <Text className="text-gray-600 ml-2 flex-1">{hospital.address}</Text>
                </View>

                {/* Action Buttons */}
                <View className="flex-row mb-8">
                    <TouchableOpacity
                        className="bg-blue-50 flex-1 py-3 rounded-lg mr-3 flex-row items-center justify-center"
                        onPress={handleCall}
                    >
                        <Feather name="phone" size={18} color="#3B82F6" />
                        <Text className="text-blue-600 font-medium ml-2">Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        className="bg-green-50 flex-1 py-3 rounded-lg flex-row items-center justify-center"
                        onPress={handleNavigation}
                    >
                        <Feather name="navigation" size={18} color="#10B981" />
                        <Text className="text-green-600 font-medium ml-2">Directions</Text>
                    </TouchableOpacity>
                </View>

                {/* Divider */}
                <View className="border-b border-gray-100 mb-6" />

                {/* Info Sections */}
                <View className="mb-6">
                    <View className="flex-row items-center mb-4">
                        <View className="bg-purple-100 p-2 rounded-lg mr-3">
                            <Feather name="clock" size={20} color="#8B5CF6" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-gray-500 text-sm">Operating Hours</Text>
                            <Text className="text-gray-800 font-medium">{hospital.hours || "24 hours"}</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center">
                        <View className="bg-blue-100 p-2 rounded-lg mr-3">
                            <Feather name="phone" size={20} color="#3B82F6" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-gray-500 text-sm">Contact</Text>
                            <Text className="text-gray-800 font-medium">{hospital.phone || "Not available"}</Text>
                        </View>
                    </View>
                </View>

                {/* Services Section */}
                <View className="mb-8">
                    <Text className="text-lg font-bold text-gray-900 mb-4">Services</Text>
                    <View className="flex-row flex-wrap">
                        {hospital.services?.map((service, index) => (
                            <View key={index} className="bg-gray-100 px-3 py-2 rounded-full mr-2 mb-2">
                                <Text className="text-gray-800 text-sm">{service}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Map Section */}
                <View>
                    <Text className="text-lg font-bold text-gray-900 mb-4">Location</Text>
                    <View className="h-48 rounded-xl overflow-hidden">
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: -6.914744, // Example coordinates (Bandung)
                                longitude: 107.60981,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: -6.914744, longitude: 107.60981 }}
                                title={hospital.name}
                                description={hospital.address}
                            />
                        </MapView>
                    </View>
                    <TouchableOpacity
                        className="mt-4 bg-gray-100 py-3 rounded-lg flex-row items-center justify-center"
                        onPress={handleNavigation}
                    >
                        <Text className="text-gray-800 font-medium">View on Maps</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}