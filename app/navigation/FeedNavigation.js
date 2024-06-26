import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Routes from './Routes';
import BuyApplication from '../screens/BuyApplication';
import RentApplication from '../screens/RentApplication';
import MyListingsScreen from '../screens/MyListingsScreen';
import PropertiesScreen from '../screens/PropertiesScreen';
import NotificationScreen from '../screens/NotificationScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={Routes.PROPERTIES} component={PropertiesScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.PROPERTY_DETAILS} component={PropertyDetailsScreen} />
        <Stack.Screen name={Routes.MY_LISTINGS} component={MyListingsScreen} />
        <Stack.Screen name={Routes.CUSTOMER_SUPPORT} component={CustomerSupportScreen} />
        <Stack.Screen name={Routes.NOTIFICATIONS} component={NotificationScreen} />
        <Stack.Screen name={Routes.BUY_APPLICATION} component={BuyApplication} />
        <Stack.Screen name={Routes.RENT_APPLICATION} component={RentApplication} />
    </Stack.Navigator>
);

export default FeedNavigator;