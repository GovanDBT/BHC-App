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

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Screen>
        <ListItem title='Thembi Dibotelo' subtitle='10 Listings' image={require('./app/assets/user01.jpg')}  />
      </Screen>
    </NavigationContainer>
  );
}
