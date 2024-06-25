import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';

import Screen from './Screen';
import Routes from '../navigation/Routes';
import AppText from '../components/AppText';
import InformationCenter from '../components/InformationCenter';

const information = [
    {
        id: 1,
        title: 'help me find a home',
        description: 'Let us help you find the perfect home for you. Fill in the information we provided to get started',
        targetScreen: Routes.HELP_ME_FIND_HOME,
    },
    {
        id: 2,
        title: 'Housing developments',
        description: 'BHC is dedicated to creating innovative and sustainable housing developments that provide quality',
        targetScreen: Routes.HOUSING_DEVELOPMENTS,
    },
    {
        id: 3,
        title: 'general inquiries',
        description: 'For any questions or additional information about our services and projects, please contact BHC',
        targetScreen: Routes.GENERAL_INQUIRIES,
    },
    {
        id: 4,
        title: 'Frequently Asked Questions',
        description: 'For any questions or additional information about our services and projects, please contact BHC',
        targetScreen: Routes.FAQ,
    },
    {
        id: 5,
        title: 'BHC Products',
        description: 'For any questions or additional information about our services and projects, please contact BHC',
        targetScreen: Routes.PRODUCTS,
    },
    {
        id: 6,
        title: 'Application Procedure',
        description: 'For any questions or additional information about our services and projects, please contact BHC',
        targetScreen: Routes.APPLICATION_PROCEDURE,
    },
    {
        id: 7,
        title: 'Eligibility Criteria',
        description: 'For any questions or additional information about our services and projects, please contact BHC',
        targetScreen: Routes.ELIGIBILITY,
    },
];

function InformationCenterScreen({ navigation }) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList 
                        data={information}
                        keyExtractor={info => info.id.toString()}
                        renderItem={({ item }) => 
                            <InformationCenter 
                                title={item.title}
                                description={item.description}
                                onPress={() => navigation.navigate(item.targetScreen)}
                            />
                        }
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                    />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default InformationCenterScreen;