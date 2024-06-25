import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import PropertiesScreen from '../screens/PropertiesScreen';
import PropertyDetailsScreen from '../screens/PropertyDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='PropertiesListings' component={PropertiesScreen} options={{headerShown: false}} />
        <Stack.Screen name='PropertyDetails' component={PropertyDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;