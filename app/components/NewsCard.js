import React from 'react';
import { View,StyleSheet, ImageBackground } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from './AppText';

function NewsCard({ image, date, title, description }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <AppText style={styles.tagline}>NEWS</AppText>
            </ImageBackground>
            <View style={styles.content}>
                <AppText style={styles.date}>{date}</AppText>
                <AppText style={styles.title}>{title}</AppText>
                <AppText numberOfLines={5} style={styles.text}>{description}</AppText>
                <View style={styles.link}>
                    <MaterialCommunityIcons style={styles.linkIcon} name="arrow-top-right-thin-circle-outline" size={18} color={colors.primary} />
                    <AppText style={styles.linkText}>Find out more</AppText>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 380,
        width: 250,
        borderWidth: 1,
        borderColor: colors.inputBorderColor,
        borderRadius: 10,
        overflow: 'hidden',
    },
    content: {
        flex: 1.3,
        padding: 12,
    },
    date: {
        fontSize: 14,
        color: colors.lightTextColor,
        marginVertical: 5,
    },
    link: {
        flexDirection: 'row',
        marginVertical: 15,
        alignItems: 'center'
    },
    linkIcon: {
        marginRight: 5
    },
    linkText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary
    },
    image: {
        flex: 1
    },
    tagline: {
        fontWeight: 'bold',
        color: colors.white,
        padding: 10,
    },
    text: {
        fontSize: 15,
        color: colors.lightTextColor,
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
    },
})

export default NewsCard;