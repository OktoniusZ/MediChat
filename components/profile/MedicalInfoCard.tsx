import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

interface MedicalInfoCardProps {
    bloodType?: string;
    allergies?: string[];
    conditions?: string[];
}

export const MedicalInfoCard: React.FC<MedicalInfoCardProps> = ({
    bloodType,
    allergies = [],
    conditions = []
}) => (
    <View className="mx-6 my-4 bg-white rounded-xl p-5 shadow-sm">
        <Text className="text-lg font-bold text-gray-900 mb-4">Medical Information</Text>

        <View className="space-y-4">
            <View className="flex-row items-center">
                <MaterialIcons name="bloodtype" size={20} color="#EF4444" style={{ marginRight: 12 }} />
                <Text className="text-gray-700">
                    Blood Type: <Text className="font-medium">{bloodType || 'Not specified'}</Text>
                </Text>
            </View>

            <MedicalInfoSection
                icon={<Ionicons name="medical-outline" size={20} color="#EF4444" />}
                title="Allergies"
                items={allergies}
                emptyText="No allergies recorded"
                itemColor="red"
            />

            <MedicalInfoSection
                icon={<MaterialIcons name="healing" size={20} color="#8B5CF6" />}
                title="Medical Conditions"
                items={conditions}
                emptyText="No conditions recorded"
                itemColor="purple"
            />
        </View>
    </View>
);

const MedicalInfoSection = ({ icon, title, items, emptyText, itemColor }: {
    icon: React.ReactNode;
    title: string;
    items: string[];
    emptyText: string;
    itemColor: 'red' | 'purple';
}) => (
    <View>
        <View className="flex-row items-center mb-2">
            {icon}
            <Text className="text-gray-700 ml-2">{title}</Text>
        </View>
        <View className="flex-row flex-wrap ml-8">
            {items.length ? (
                items.map((item, index) => (
                    <View
                        key={index}
                        className={`bg-${itemColor}-100 px-3 py-1 rounded-full mr-2 mb-2`}
                    >
                        <Text className={`text-${itemColor}-600 text-sm`}>{item}</Text>
                    </View>
                ))
            ) : (
                <Text className="text-gray-500 text-sm">{emptyText}</Text>
            )}
        </View>
    </View>
);