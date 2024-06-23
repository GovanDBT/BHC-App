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
import PropertiesScreen from './app/screens/PropertiesScreen';
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ForgotPasswordScreen from './app/screens/ForgotPasswordScreen';
import SignupButton from './app/components/SignupButton';
import SignupSeparator from './app/components/SignupSeparator';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  
  return (
    <NavigationContainer theme={NavigationTheme}>
        <HomeScreen />
    </NavigationContainer>
  );
}
