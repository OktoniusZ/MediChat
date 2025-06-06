import { View, Text } from 'react-native'
import { Redirect, Tabs } from 'expo-router'
import { HomeIcon, SearchIcon, SaveIcon, ProfileIcon, MessageIcon } from '@/components/icons'
import { useAuth } from '@/app/providers/AuthProvider';

const TabIcon = ({ focused, title, icon }: { focused: boolean; title: string; icon: React.ReactNode }) => {
    return (
        <View className="items-center justify-center" style={{ width: 80 }}>
            <View style={{ marginBottom: 4 }}>
                {icon}
            </View>
            <Text
                className={`text-xs ${focused ? 'text-blue-500 font-semibold' : 'text-slate-500'}`}


                numberOfLines={1}
                ellipsizeMode="tail"
                style={{ maxWidth: 80 }}
            >
                {title}
            </Text>
        </View>
    )
}

const _layout = () => {
    const { session } = useAuth();

    if (!session) {
        return <Redirect href="/(auth)/welcome" />; // Block unauthorized access
    }
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#3B82F6',
            tabBarInactiveTintColor: '#64748B',
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: '500',
            },
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: '#E2E8F0',
                height: 70,
                paddingBottom: 8,
                paddingTop: 14,
            },
            tabBarItemStyle: {
                flex: 1,
                minWidth: 80, // Ensure each tab has minimum width
            },
            headerShown: false
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            title="Home"
                            icon={<HomeIcon active={focused} />}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="messages"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            title="Messages"
                            icon={<MessageIcon active={focused} />}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="hospitals"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            title="Hospital"
                            icon={<SaveIcon active={focused} />}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "",
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            title="Profile"
                            icon={<ProfileIcon active={focused} />}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}

export default _layout