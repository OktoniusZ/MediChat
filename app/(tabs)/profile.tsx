import React, { useState } from 'react';
import { ScrollView, Alert, TextInput, View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { MedicalInfoCard } from '@/components/profile/MedicalInfoCard';
import { SettingsCard } from '@/components/profile/SettingCard';
import { ActionButton } from '@/components/profile/ActionButton';

const ProfileScreen = () => {
    const router = useRouter();
    const [profile, setProfile] = useState({
        id: 'user-123',
        name: 'Dr. John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        avatar: 'https://randomuser.me/api/portraits/med/men/75.jpg',
        joinedDate: 'Joined January 2023',
        medicalHistory: {
            bloodType: 'O+',
            allergies: ['Penicillin', 'Peanuts'],
            conditions: ['Hypertension']
        }
    });

    const [isEditing, setIsEditing] = useState(false);
    const [tempProfile, setTempProfile] = useState({ ...profile });

    const handleLogout = () => {
        Alert.alert(
            'Log Out',
            'Are you sure you want to log out?',
            [
                { text: 'Cancel', style: 'cancel' },
                { text: 'Log Out', style: 'destructive', onPress: () => router.replace('/login') }
            ]
        );
    };

    const handleSave = () => {
        setProfile(tempProfile);
        setIsEditing(false);
        Alert.alert('Profile Updated', 'Your changes have been saved');
    };

    return (
        <ScrollView className="flex-1 bg-gray-50">
            <ProfileHeader
                title="My Profile"
                name={isEditing ? tempProfile.name : profile.name}
                email={profile.email}
                phone={isEditing ? tempProfile.phone : profile.phone}
                avatarUri={profile.avatar}
                isEditing={isEditing}
                onBackPress={() => router.back()}
                onEditPress={isEditing ? handleSave : () => setIsEditing(true)}
            />

            {isEditing ? (
                <View className="mx-6 my-4 bg-white rounded-xl p-5 shadow-sm">
                    <TextInput
                        className="bg-gray-100 p-3 rounded-lg mb-3 text-gray-900 border border-gray-200"
                        value={tempProfile.name}
                        onChangeText={(text) => setTempProfile({ ...tempProfile, name: text })}
                    />
                    <TextInput
                        className="bg-gray-100 p-3 rounded-lg text-gray-900 border border-gray-200"
                        value={tempProfile.phone}
                        onChangeText={(text) => setTempProfile({ ...tempProfile, phone: text })}
                        keyboardType="phone-pad"
                    />
                </View>
            ) : (
                <>
                    <MedicalInfoCard
                        bloodType={profile.medicalHistory.bloodType}
                        allergies={profile.medicalHistory.allergies}
                        conditions={profile.medicalHistory.conditions}
                    />

                    <SettingsCard />
                </>
            )}

            <View className="mx-6 my-4">
                <ActionButton
                    label="Emergency Contacts"
                    onPress={() => router.push('/profile/emergency-contacts')}
                    variant="primary"
                />

                <ActionButton
                    label="Log Out"
                    onPress={handleLogout}
                    variant="secondary"
                />

                <Text className="text-center text-gray-500 text-xs mt-4">
                    {profile.joinedDate} • v1.0.0
                </Text>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;