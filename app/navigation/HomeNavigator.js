import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Routes from './Routes';
import HomeScreen from '../screens/HomeScreen';
import MyPropertyScreen from '../screens/MyPropertyScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Main' component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.MY_PROPERTY} component={MyPropertyScreen} />
        <Stack.Screen name={Routes.NOTIFICATIONS} component={NotificationScreen} />
        <Stack.Screen name={Routes.CUSTOMER_SUPPORT} component={CustomerSupportScreen} />
    </Stack.Navigator>
);

export default HomeNavigator;