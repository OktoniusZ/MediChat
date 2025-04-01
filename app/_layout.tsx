import { Redirect, Slot, Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { AuthProvider } from '@/app/providers/AuthProvider';
import { useAuth } from '@/app/providers/AuthProvider';
import './globals.css'

function AuthGate() {
    const { session, isLoading } = useAuth();

    if (isLoading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#00C0D9" />
            </View>
        );
    }

    return (
        <>
            {/*Authentication*/}
            {!session ? (
                <Redirect href="/(auth)/welcome" />
            ) : (
                <Redirect href="/(tabs)" />
            )}
        </>
    );
}

export default function RootLayout() {
    if (__DEV__) {
        return <Slot />; // Bypasses all auth checks
    }

    return (
        <AuthProvider>
            <Slot />
        </AuthProvider>
    );
}