
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import HomePage from '../HomePage';
import RekomendasiMenuDietScreen from '../RekomendasiMenuDietScreen';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Menu" component={RekomendasiMenuDietScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
