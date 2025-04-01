import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '@/lib/supabase';
import { Link, router } from 'expo-router';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
            });

            if (error) {
                Alert.alert('Sign Up Error', error.message);
            } else if (data.session) {
                Alert.alert('Success', 'Account created successfully!', [
                    { text: 'OK', onPress: () => router.replace('/(tabs)') }
                ]);
            } else {
                Alert.alert(
                    'Confirm Your Email',
                    'Check your email for the confirmation link before signing in',
                    [{ text: 'OK', onPress: () => router.replace('/(auth)/signin') }]
                );
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 justify-center p-6 bg-gray-100">
            <View className="bg-white p-6 rounded-xl shadow-sm">
                <Text className="text-cyan-500 text-2xl font-bold mb-6">Create Account</Text>

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
                    className="bg-cyan-500 py-3 rounded-lg"
                    onPress={handleSignUp}
                    disabled={loading}
                >
                    <Text className="text-white text-center font-bold">
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </Text>
                </TouchableOpacity>

                <Link href="/(auth)/signin" className="mt-4 text-center text-gray-500">
                    Already have an account? Sign In
                </Link>
            </View>
        </View>
    );
}