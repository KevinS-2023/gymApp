import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import Logo from '../../assets/images/exercise.svg';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="training"
        options={{
          title: 'Training',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Logo width={size} height={size} fill={color} />
          ),
        }}
      />


      <Tabs.Screen
        name="ernaehrung"
        options={{
          title: 'Ernährung',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Logo width={size} height={size} fill={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="fortschritt"
        options={{
          title: 'Fortschritt',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Logo width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Logo width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tabs>
  );
}
