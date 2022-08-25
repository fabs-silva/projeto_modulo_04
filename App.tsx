import {
  Rubik_400Regular,
  Rubik_700Bold,
  useFonts,
} from '@expo-google-fonts/rubik';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from './src/styles/theme';

export default function App() {
  const { colors } = theme;
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={colors.dark.accent} style="light" />
      <Text>Starting Project</Text>
    </SafeAreaView>
  );
}
