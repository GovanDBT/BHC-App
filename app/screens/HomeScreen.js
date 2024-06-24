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
            <View style={styles.sectionContainer}>
                <View style={styles.head}>
                    <AppText size={20} style={styles.sectionHeader}>Dumela Thembi</AppText>
                    <MaterialCommunityIcons style={styles.headIcon} name="hand-wave-outline" size={22} color={colors.primary} />
                </View>
                <AccountSummary />
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.headerSection}>
                    <AppText size={20} style={styles.sectionHeader}>News</AppText>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row'
    },
    headIcon: {
        marginLeft: 10,
    },
    sectionContainer: {
        marginBottom: 50
    },
    sectionHeader: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
})

export default HomeScreen;