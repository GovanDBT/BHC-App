import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppText from './app/components/AppText';
import Screen from './app/screens/Screen';

export default function App() {
  return (
    <Screen>
      <AppText>Hello world!!!</AppText>
    </Screen>
  );
}
