import { View, Text, Image, TouchableOpacity } from 'react-native';

type NewsItem = {
    title: string;
    time: string;
    image: any;
};

type NewsSectionProps = {
    newsItems: NewsItem[];
};

export default function NewsSection({ newsItems }: NewsSectionProps) {
    return (
        <>
            <Text className="text-xl font-bold mb-4">Good News</Text>
            <View className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                {newsItems.map((news, index) => (
                    <TouchableOpacity
                        key={index}
                        className={`flex-row p-4 ${index < newsItems.length - 1 ? 'border-b border-gray-100' : ''}`}
                    >
                        <View className="flex-1 mr-4">
                            <Text className="font-bold mb-1">{news.title}</Text>
                            <Text className="text-gray-400 text-sm">{news.time}</Text>
                        </View>
                        <Image source={news.image} className="w-20 h-20 rounded-lg" />
                    </TouchableOpacity>
                ))}
            </View>
        </>
    );
}