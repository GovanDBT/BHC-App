import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function AccountSummary({ upcoming, maintenance, arrears, propertyType, tenantType, lease, onPressPayments, onPressProperty }) {
    return (
        <View style={styles.homeCard}>
            <View style={styles.cardContent}>
                <View style={styles.cardPaymentContent}>
                    <TouchableOpacity style={styles.headers} onPress={onPressPayments}>
                        <AppText style={styles.textHeader}>Payments</AppText>
                        <MaterialCommunityIcons name="arrow-top-right" size={22} color={colors.white} />
                    </TouchableOpacity>
                    <View style={styles.paymentType}>
                        <AppText style={styles.contentHeader}>Upcoming</AppText>
                        {upcoming && <AppText style={styles.contentText}>{upcoming}</AppText> ? {upcoming} : <AppText style={styles.none}>None</AppText> }
                    </View>
                    <View style={styles.paymentType}>
                        <AppText style={styles.contentHeader}>Maintenance</AppText>
                        {maintenance && <AppText style={styles.contentText}>{maintenance}</AppText> ? {maintenance} : <AppText style={styles.none}>None</AppText> }
                    </View>
                    <View style={styles.paymentType}>
                        <AppText style={styles.contentHeader}>Arrears</AppText>
                        {arrears && <AppText style={styles.contentText}>{arrears}</AppText> ? {arrears} : <AppText style={styles.none}>None</AppText> }
                    </View>
                </View>
                <View style={styles.cardPropertyContent}>
                    <TouchableOpacity style={styles.headers} onPress={onPressProperty}>
                        <AppText style={styles.textHeader}>My Property</AppText>
                        <MaterialCommunityIcons name="arrow-top-right" size={22} color={colors.white} />
                    </TouchableOpacity>
                    <View style={styles.paymentType}>
                        <AppText style={styles.contentHeader}>Property Type</AppText>
                        {propertyType && <AppText style={styles.contentText}>{propertyType}</AppText> ? {propertyType} : <AppText style={styles.none}>None</AppText> }
                    </View>
                    <View style={styles.paymentType}>
                        <AppText style={styles.contentHeader}>Tenant Type</AppText>
                        {tenantType && <AppText style={styles.contentText}>{tenantType}</AppText> ? {tenantType} : <AppText style={styles.none}>None</AppText> }
                    </View>
                    <View style={styles.paymentType}>
                        <AppText style={styles.contentHeader}>Lease Agreement</AppText>
                        {lease && <AppText style={styles.contentText}>{lease}</AppText> ? {lease} : <AppText style={styles.none}>None</AppText> }
                    </View>
                </View>
            </View>
            <View style={styles.cardPaymentHistory}>
                <TouchableOpacity style={[styles.headers, {borderBottomWidth: 0, paddingBottom: 0}]} onPress={onPressPayments}>
                    <AppText style={styles.textHeader}>Last Payment</AppText>
                    <MaterialCommunityIcons name="arrow-top-right" size={22} color={colors.white} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    none: {
        color: colors.white,
        fontStyle: 'italic',
        fontSize: 14,
    },
    cardContent: {
        flex: 4,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
        flexDirection: 'row',
    },
    cardPaymentContent: {
        flex: 1,
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
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.inputBorderColor,
        paddingBottom: 5
    },
    homeCard: {
        backgroundColor: colors.primary,
        height: 260,
        borderRadius: 10,
        padding: 8,
    },
    paymentType: {
        marginTop: 7,
    },
    contentHeader: {
        fontWeight: 'bold',
        color: colors.white,
        fontSize: 15
    },
    contentText: {
        color: colors.white,
        fontSize: 14,
    },
    propertyType: {
        marginTop: 10,
        color: colors.white
    },
    textHeader: {
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.white,
    },
    
})

export default AccountSummary;