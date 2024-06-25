import React from 'react';
import { ScrollView, Text } from 'react-native';

import Screen from './Screen';
import Routes from '../navigation/Routes';
import TopHeader from '../components/TopHeader';

function PaymentScreen({ navigation }) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                {/* Top Header */}
                <TopHeader 
                    title='my Payments'
                    onPress={() => navigation.navigate(Routes.MY_PAYMENTS)} 
                    notifications={() => navigation.navigate(Routes.NOTIFICATIONS)} 
                    customer={() => navigation.navigate(Routes.CUSTOMER_SUPPORT)}
                />
                <Text>Payments Screen</Text>
            </ScrollView>
        </Screen>
    );
}

export default PaymentScreen;