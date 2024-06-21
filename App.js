import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import Tag from './app/components/Tag';
import Screen from './app/screens/Screen';
import Card from './app/components/Card';

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      <Screen>
        <Card 
          image={require("./app/assets/bhc-house01.jpeg")}
          price="4,500"
          tagName="Rent"
          title="BHC Palapye Property"
          location="Palapye, Tsere Ward, Plot 4453"
        />
      </Screen>
    </NavigationContainer>
  );
}
