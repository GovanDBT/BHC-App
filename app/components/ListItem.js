import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subtitle, image, onPress, icon, style, iconSize = 27 }) {
    return (
        <TouchableHighlight underlayColor={colors.inputBorderColor} onPress={onPress}>
            <View style={[styles.container, style]}>
                {<MaterialCommunityIcons name={icon} size={iconSize} color={colors.textColor} />}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subtitle && <AppText size={14} style={styles.subtitle}>{subtitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
    },
    detailsContainer: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: '500',
        fontSize: 18
    },
    subtitle: {
        color: colors.lightTextColor
    }
})

export default ListItem;