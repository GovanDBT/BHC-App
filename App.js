import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import Tag from './app/components/Tag';
import Screen from './app/screens/Screen';
import Card from './app/components/Card';
import PropertyDetailsScreen from './app/screens/PropertyDetailsScreen';
import ListItem from './app/components/ListItem';
import ListingScreen from './app/screens/ListingScreen';
import NotificationItem from './app/components/NotificationItem';
import NotificationScreen from './app/screens/NotificationScreen';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
        <AccountScreen />
    </NavigationContainer>
  );
}
