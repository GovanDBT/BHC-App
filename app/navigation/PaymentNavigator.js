import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Routes from './Routes';
import PaymentScreen from '../screens/PaymentScreen';
import MyPaymentsScreen from '../screens/MyPaymentsScreen';
import NotificationScreen from '../screens/NotificationScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';


const Stack = createStackNavigator();

const PaymentNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={Routes.PAYMENTS} component={PaymentScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.MY_PAYMENTS} component={MyPaymentsScreen} />
        <Stack.Screen name={Routes.CUSTOMER_SUPPORT} component={CustomerSupportScreen} />
        <Stack.Screen name={Routes.NOTIFICATIONS} component={NotificationScreen} />
    </Stack.Navigator>
);

export default PaymentNavigator;