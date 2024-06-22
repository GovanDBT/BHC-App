import React from 'react';
import { Image, StyleSheet, View } from 'react-native'

import AppText from './AppText';
import colors from '../config/colors';

function NotificationItem({ title, description, date}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.text} size={13}>{date}</AppText>
            </View>
                <AppText style={styles.text}>{description}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17
    },
    text: {
        color: colors.lightTextColor
    }
})

export default NotificationItem;