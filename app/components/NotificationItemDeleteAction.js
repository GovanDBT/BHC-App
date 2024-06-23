import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function NotificationItemDeleteAction() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="trash-can" size={32} color={colors.white} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NotificationItemDeleteAction;