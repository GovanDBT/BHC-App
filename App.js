import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import Tag from './app/components/Tag';
import Screen from './app/screens/Screen';
import Card from './app/components/Card';
import PropertyDetailsScreen from './app/screens/PropertyDetailsScreen';

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Screen>
        <PropertyDetailsScreen />
      </Screen>
    </NavigationContainer>
  );
}
