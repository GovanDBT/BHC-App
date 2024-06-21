import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  console.log('App executed');
  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
