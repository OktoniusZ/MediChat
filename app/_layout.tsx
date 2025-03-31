import { Redirect, Slot } from 'expo-router';
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
      {!session ? (
        <Redirect href="/(auth)/welcome" /> // Auth flow
      ) : (
        <Redirect href="/(tabs)" /> // Main app
      )}
    </>
  );
}

// Root layout now just provides the Auth context
export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot /> 
    </AuthProvider>
  );
}