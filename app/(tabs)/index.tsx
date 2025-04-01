import { ScrollView } from 'react-native';
import { images } from '@/constants/images';
import UserProfile from '@/components/home/UserProfile';
import ConsultationOptions from '@/components/home/ConsultationOptions';
import TopDoctors from '@/components/home/TopDoctors';
import NewsSection from '@/components/home/NewsSection';

export default function HomeScreen() {
    // Sample data
    const consultationOptions = [
        { icon: 'medical-services', title: 'General Doctor', color: 'bg-blue-100' },
        { icon: 'favorite', title: 'Cardiologist', color: 'bg-red-100' },
        { icon: 'psychology', title: 'Psychologist', color: 'bg-purple-100' },
        { icon: 'child-care', title: 'Pediatrician', color: 'bg-yellow-100' },
    ];

    const topDoctors = [
        { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', rating: 4.9, image: images.doctor1 },
        { name: 'Dr. Michael Chen', specialty: 'Neurology', rating: 4.8, image: images.doctor2 },
        { name: 'Dr. Emily Wilson', specialty: 'Pediatrics', rating: 4.7, image: images.doctor3 },
    ];

    const newsItems = [
        { title: 'New COVID-19 Vaccine Available', time: 'Today', image: images.covid },
        { title: 'Tips for Better Sleep Hygiene', time: 'Yesterday', image: images.news },
    ];

    return (
        <ScrollView className="bg-gray-50 flex-1 p-4">
            <UserProfile name="John Doe" role="Patient at Medichat" image={images.anime1} />
            <ConsultationOptions options={consultationOptions} />
            <TopDoctors doctors={topDoctors} />
            <NewsSection newsItems={newsItems} />
        </ScrollView>
    );
}