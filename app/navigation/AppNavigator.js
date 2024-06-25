import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

import HomeNavigator from './HomeNavigator';
import FeedNavigator from './FeedNavigation';
import PaymentNavigator from './PaymentNavigator';
import AccountScreen from '../screens/AccountScreen';
import MaintenanceNavigator from './MaintenanceNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                height: 65, // Increase the height here
                paddingBottom: 12, // Optional: adjust padding if needed
            },
            tabBarLabelStyle: {
                fontSize: 11, // Optional: adjust label size if needed
            }
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={HomeNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="home" size={size} color={color} />
            }} 
        />
        <Tab.Screen 
            name="Payments" 
            component={PaymentNavigator} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="wallet" size={size} color={color} />
            }} 
        />
        <Tab.Screen 
            name="Properties" 
            component={FeedNavigator} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="pluscircleo" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Maintenance" 
            component={MaintenanceNavigator} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="tool" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Account" 
            component={AccountScreen} 
            options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="user" size={size} color={color} />
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;