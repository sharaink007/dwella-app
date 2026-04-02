import { Tabs } from 'expo-router';
import { COLORS } from '../../constants/theme';
import { Ionicons } from '@expo/vector-icons'
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.brand,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0.5,
          borderTopColor: COLORS.border,
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
      }}
    >
      <Tabs.Screen name="home" options={{
        title: 'Home', tabBarIcon: ({ color }) => (
          <Ionicons name="home-outline" size={22} color={color} />)
      }}


      />
      <Tabs.Screen name="chat" options={{
        title: 'Chat', tabBarIcon: ({ color }) => (
          <Ionicons name="chatbubble-outline" size={22} color={color} />
        )
      }} />
      <Tabs.Screen name="marketplace" options={{
        title: 'Market', tabBarIcon: ({ color }) => (

          <Ionicons name="storefront-outline" size={22} color={color} />

        )
      }} />
      <Tabs.Screen
        name="connect"
        options={{
          title: 'Connect',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}