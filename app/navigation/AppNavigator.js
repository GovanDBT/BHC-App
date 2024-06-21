import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PropertiesScreen from '../screens/PropertiesScreen';
import MaintenanceScreen from '../screens/MaintenanceScreen';
import AccountScreen from '../screens/AccountScreen';

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
            component={HomeScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="home" size={size} color={color} />
            }} 
        />
        <Tab.Screen 
            name="Payments" 
            component={PaymentScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="wallet" size={size} color={color} />
            }} 
        />
        <Tab.Screen 
            name="Properties" 
            component={PropertiesScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="pluscircleo" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Maintenance" 
            component={MaintenanceScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="tool" size={size} color={color} />
            }}
        />
        <Tab.Screen 
            name="Account" 
            component={AccountScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="user" size={size} color={color} />
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;