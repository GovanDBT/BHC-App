import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Routes from './Routes';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import NotificationScreen from '../screens/NotificationScreen';
import MyMaintenanceScreen from '../screens/MyMaintenanceScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';

const Stack = createStackNavigator();

const MaintenanceNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name={Routes.MAINTENANCE} component={MaintenanceScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.MY_MAINTENANCE} component={MyMaintenanceScreen} />
        <Stack.Screen name={Routes.CUSTOMER_SUPPORT} component={CustomerSupportScreen} />
        <Stack.Screen name={Routes.NOTIFICATIONS} component={NotificationScreen} />
    </Stack.Navigator>
);

export default  MaintenanceNavigator;