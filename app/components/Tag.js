import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function Tag({ title }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>{title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryTransparent,
        width: 70,
        paddingVertical: 7,
        borderRadius: 30
    },
    text: {
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: "capitalize"
    }
})

export default Tag;