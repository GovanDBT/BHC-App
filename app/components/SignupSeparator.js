import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function SignupSeparator() {
    return (
        <View style={styles.container}>
            <View style={styles.border}></View>
            <AppText style={styles.text}>or</AppText>
            <View style={styles.border}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    border: {
        height: 1,
        backgroundColor: colors.inputBorderColor,
        width: '40%'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 5
    }
})

export default SignupSeparator;