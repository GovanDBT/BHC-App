import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';
import colors from '../config/colors';

function AppText({ children, style, onPress }) {
    return (
        <Text style={[styles.text, style]} onPress={onPress}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: colors.textColor,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    }
})

export default AppText;