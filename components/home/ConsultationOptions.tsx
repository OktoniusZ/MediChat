import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Option = {
    icon: string;
    title: string;
    color: string;
};

type ConsultationOptionsProps = {
    options: Option[];
};

export default function ConsultationOptions({ options }: ConsultationOptionsProps) {
    return (
        <>
            <Text className="text-xl font-bold mb-4">Mau konsultasi dengan siapa hari ini?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
                {options.map((option, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`w-32 h-40 ${option.color} rounded-2xl p-4 mr-4 items-center justify-center shadow-sm`}
                    >
                        <MaterialIcons name={option.icon as any} size={40} color="#00C0D9" />
                        <Text className="mt-3 text-center font-medium">{option.title}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
}