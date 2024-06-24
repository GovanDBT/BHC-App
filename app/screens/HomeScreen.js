import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import AccountSummary from '../components/AccountSummary';

function HomeScreen(props) {
    return (
        <Screen>
            <View>
                <View style={styles.head}>
                    <AppText size={20} style={styles.sectionHeader}>Dumela Thembi</AppText>
                    <MaterialCommunityIcons style={styles.headIcon} name="hand-wave-outline" size={22} color={colors.primary} />
                </View>
                <AccountSummary />
                    <View style={styles.cardContent}>
                        <View style={styles.cardPaymentContent}>
                            <View style={styles.headers}>
                                <AppText style={styles.textHeader}>Payments</AppText>
                                <MaterialCommunityIcons name="arrow-top-right" size={22} color={colors.textColor} />
                            </View>
                            <View style={styles.paymentType}>
                                <AppText style={styles.paymentTypeHeader}>Upcoming</AppText>
                                <AppText style={styles.paymentTypePrice}>P 4,840</AppText>
                            </View>
                            <View style={styles.paymentType}>
                                <AppText style={styles.paymentTypeHeader}>Outstanding</AppText>
                                <AppText style={styles.paymentTypePrice}>P 200</AppText>
                            </View>
                        </View>
                        <View style={styles.cardPropertyContent}>
                            <View style={styles.headers}>
                                <AppText style={styles.textHeader}>My Property</AppText>
                                <MaterialCommunityIcons name="arrow-top-right" size={22} color={colors.textColor} />
                            </View>
                            <AppText style={styles.propertyType}>Type: Bachelor Pad</AppText>
                            <AppText style={styles.propertyType}>Since: 10/28/2018</AppText>
                            <AppText style={styles.propertyType}>Ends: 10/28/2027</AppText>
                        </View>
                    </View>
                    <View style={styles.cardPaymentHistory}>
                        <View style={styles.headers}>
                                <AppText style={styles.textHeader}>Last Payment</AppText>
                                <MaterialCommunityIcons name="arrow-top-right" size={22} color={colors.textColor} />
                            </View>
                    </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    cardContent: {
        flex: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
        flexDirection: 'row',
    },
    cardPaymentContent: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: colors.inputBorderColor,
        padding: 4,
    },
    cardPaymentHistory: {
        flex: 1,
        justifyContent: 'center'
    },
    cardPropertyContent: {
        flex: 1,
        padding: 4
    },
    head: {
        flexDirection: 'row'
    },
    headIcon: {
        marginLeft: 10,
    },
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    homeCard: {
        borderWidth: 1,
        borderColor: colors.inputBorderColor,
        height: 210,
        borderRadius: 10,
        padding: 8,
    },
    paymentType: {
        marginTop: 7,
    },
    paymentTypeHeader: {
        fontWeight: 'bold',
        color: colors.primary
    },
    paymentTypePrice: {
        color: colors.lightTextColor
    },
    propertyType: {
        marginTop: 10
    },
    sectionHeader: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
    textHeader: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    
})

export default HomeScreen;