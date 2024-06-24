import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function InformationCenter({ onPress, title, description }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.header}>
                <AppText style={styles.headerText}>{title}</AppText>
                <MaterialCommunityIcons name="arrow-top-right-thin-circle-outline" size={20} color={colors.primary} />
            </View>
            <AppText style={styles.text}>{description}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.inputBorderColor,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
        alignItems: 'center',
        textTransform: 'capitalize',
    },
    headerText: {
        fontWeight: 'bold',
        color: colors.primary,
        fontSize: 17,
    },
    text: {
        fontSize: 15,
        color: colors.lightTextColor
    },
})

export default InformationCenter;