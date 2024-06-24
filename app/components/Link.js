import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function Link({ onPress, size = 18 }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.text} size={size}>See More</AppText>
            <MaterialCommunityIcons name="arrow-right" size={size + 8} color={colors.primary} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        fontWeight: 'bold',
        marginRight: 10,
        fontSize: 18,
        color: colors.primary
    }
})

export default Link;