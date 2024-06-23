import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function SignupButton({ image, text, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <AppText>{text}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: colors.inputBorderColor,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        marginVertical: 10
    },
    image: {
        width: 28,
        height: 28,
        marginRight: 10
    }
})

export default SignupButton;