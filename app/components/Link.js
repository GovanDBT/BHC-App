import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function Link(props) {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>See More</AppText>
            <MaterialCommunityIcons name="arrow-right" size={24} color={colors.primary} />
        </View>
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