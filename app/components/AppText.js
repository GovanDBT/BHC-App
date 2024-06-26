import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';

function AppText({ children, style, onPress, numberOfLines, size = 16 }) {
    return (
        <Text 
            style={[styles.text, {fontSize: size}, style]} 
            onPress={onPress}
            numberOfLines={numberOfLines}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.textColor,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
})

export default AppText;