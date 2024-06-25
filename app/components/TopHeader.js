import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function TopHeader({ myProperty, notifications, customer }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.propertyContainer} onPress={myProperty}>
                <AppText style={styles.text}>My Property</AppText>
                <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={20} color={colors.textColor} />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={customer}>
                    <MaterialCommunityIcons name="account-tie-voice-outline" size={30} color={colors.textColor} />
                </TouchableOpacity>
                <TouchableOpacity onPress={notifications}>
                    <MaterialCommunityIcons style={styles.bell} name="bell-outline" size={30} color={colors.textColor} />
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bell: {
        marginLeft: 20
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 5,
        backgroundColor: colors.white,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    propertyContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 7
    },
})

export default TopHeader;