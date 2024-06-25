import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Routes from './Routes';
import AccountScreen from '../screens/AccountScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import MyListingsScreen from '../screens/MyListingsScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import InformationCenterScreen from '../screens/InformationCenterScreen';

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={Routes.ACCOUNT} component={AccountScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.MY_LISTINGS} component={MyListingsScreen} />
        <Stack.Screen name={Routes.ABOUT_US} component={AboutUsScreen} />
        <Stack.Screen name={Routes.INFORMATION_CENTER} component={InformationCenterScreen} />
        <Stack.Screen name={Routes.CUSTOMER_SUPPORT} component={CustomerSupportScreen} />
    </Stack.Navigator>
);

export default AccountNavigator;