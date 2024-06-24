import React from 'react';
import { View, StyleSheet } from 'react-native';

import Link from './Link';
import AppText from './AppText';
import colors from '../config/colors';

function HeaderSection({ onPress, title, size = 20 }) {
    return (
        <View style={styles.container}>
            <AppText style={styles.text} size={size}>{title}</AppText>
            <Link onPress={onPress} size={size} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
        paddingBottom: 5
    },
    text: {
        fontWeight: 'bold',
        textTransform: 'capitalize'
    }
})

export default HeaderSection;