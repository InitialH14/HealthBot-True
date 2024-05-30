import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useColorScheme } from '@/hooks/useColorScheme';
import GrafikforearmWidget from './GrafikforearmWidget';

import Signinpage from './Signinpage';
import HomePage from './HomePage';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const Stack = createNativeStackNavigator();
  return(
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="Signinpage"
            component={Signinpage}
            options={{title: 'Sign In'}}
          />
          <Stack.Screen
            name="HomePage"
            component={HomePage}
            options={{title: 'Signup'}}
          />
        </Stack.Navigator>
    </ThemeProvider>
  );
}
