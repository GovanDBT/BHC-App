import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PropertiesScreen from '../screens/PropertiesScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Payments" component={PaymentScreen} />
        <Tab.Screen name="Properties" component={PropertiesScreen} />
        <Tab.Screen name="Maintenance" component={MaintenanceScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
)

export default AppNavigator;