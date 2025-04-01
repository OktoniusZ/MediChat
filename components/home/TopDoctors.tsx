import { View, Text, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

type Doctor = {
    name: string;
    specialty: string;
    rating: number;
    image: any;
};

type TopDoctorsProps = {
    doctors: Doctor[];
};

export default function TopDoctors({ doctors }: TopDoctorsProps) {
    return (
        <>
            <Text className="text-xl font-bold mb-4">Top Rated Doctors</Text>
            <View className="bg-white rounded-xl shadow-sm p-4 mb-6">
                {doctors.map((doctor, index) => (
                    <View
                        key={index}
                        className={`flex-row items-center py-3 ${index < doctors.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                        <Image source={doctor.image} className="w-14 h-14 rounded-full" />
                        <View className="ml-4 flex-1">
                            <Text className="font-bold">{doctor.name}</Text>
                            <Text className="text-gray-500 text-sm">{doctor.specialty}</Text>
                        </View>
                        <View className="flex-row items-center">
                            <FontAwesome name="star" size={16} color="#FFD700" />
                            <Text className="ml-1">{doctor.rating}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </>
    );
}