import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '@/lib/supabase';
import { Link, router } from 'expo-router';

export default function SignInScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                Alert.alert('Sign In Error', error.message);
            } else {
                router.replace('/(tabs)'); // Redirect to main app
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 justify-center p-6 bg-gray-100">
            <View className="bg-white p-6 rounded-xl shadow-sm">
                <Text className="text-cyan-500 text-2xl font-bold mb-6">Welcome Back</Text>

                <TextInput
                    placeholder="Email"
                    className="bg-white p-4 rounded-lg border border-gray-300 mb-4"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />

                <TextInput
                    placeholder="Password"
                    className="bg-white p-4 rounded-lg border border-gray-300 mb-6"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity
                    className="bg-cyan-500 py-3 rounded-lg mb-4"
                    onPress={handleSignIn}
                    disabled={loading}
                >
                    <Text className="text-white text-center font-bold">
                        {loading ? 'Signing In...' : 'Sign In'}
                    </Text>
                </TouchableOpacity>

                <View className="flex-row justify-between items-center">
                    <Link href="/(auth)/forgot-password" className="text-cyan-500 text-sm">
                        Forgot Password?
                    </Link>
                    
                    <Link href="/(auth)/signup" className="text-gray-500 text-sm">
                        Create New Account
                    </Link>
                </View>
            </View>
        </View>
    );
}