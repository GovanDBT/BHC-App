import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function PropertyDetailsTag({ title, iconName }) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons style={styles.icon} name={iconName} size={24} color={colors.textColor} />
            <AppText style={styles.text}>{title}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grayColor,
        width: 110,
        paddingVertical: 10,
        borderRadius: 30,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: colors.textColor,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: "capitalize"
    },
    icon: {
        marginRight: 5
    }
})

export default PropertyDetailsTag;