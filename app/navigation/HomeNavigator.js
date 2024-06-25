import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import Routes from './Routes';
import FAQ from '../screens/FAQ';
import HomeScreen from '../screens/HomeScreen';
import MyPaymentsScreen from '../screens/MyPaymentsScreen';
import MyPropertyScreen from '../screens/MyPropertyScreen';
import GeneralInquiries from '../screens/GeneralInquiries';
import HousingDevScreen from '../screens/HousingDevScreen';
import BHCProductsScreen from '../screens/BHCProductsScreen';
import EligibilityScreen from '../screens/EligibilityScreen';
import NotificationScreen from '../screens/NotificationScreen';
import HelpFindHomeScreen from '../screens/HelpFindHomeScreen';
import CustomerSupportScreen from '../screens/CustomerSupportScreen';
import InformationCenterScreen from '../screens/InformationCenterScreen';
import ApplicationProcedureScreen from '../screens/ApplicationProcedureScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Main' component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={Routes.MY_PROPERTY} component={MyPropertyScreen} />
        <Stack.Screen name={Routes.NOTIFICATIONS} component={NotificationScreen} />
        <Stack.Screen name={Routes.CUSTOMER_SUPPORT} component={CustomerSupportScreen} />
        <Stack.Screen name={Routes.MY_PAYMENTS} component={MyPaymentsScreen} />
        <Stack.Screen name={Routes.INFORMATION_CENTER} component={InformationCenterScreen} />
        <Stack.Screen name={Routes.HELP_ME_FIND_HOME} component={HelpFindHomeScreen} />
        <Stack.Screen name={Routes.GENERAL_INQUIRIES} component={GeneralInquiries} />
        <Stack.Screen name={Routes.HOUSING_DEVELOPMENTS} component={HousingDevScreen} />
        <Stack.Screen name={Routes.FAQ} component={FAQ} />
        <Stack.Screen name={Routes.PRODUCTS} component={BHCProductsScreen} />
        <Stack.Screen name={Routes.APPLICATION_PROCEDURE} component={ApplicationProcedureScreen} />
        <Stack.Screen name={Routes.ELIGIBILITY} component={EligibilityScreen} />
    </Stack.Navigator>
);

export default HomeNavigator;