import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';
import Tag from './Tag';

function Card({ image, price, title, location, tagName, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.card}>
                <Image source={{ uri: image }} style={styles.image} />
                <View style={styles.detailsContainer}>
                    <View style={styles.header}>
                        <AppText style={styles.price}>P{price}</AppText>
                        <Tag title={tagName}/>
                    </View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.location}>{location}</AppText>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        overflow: 'hidden',
        marginRight: 17
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    detailsContainer: {
        padding: 10
    },
    header: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor
    },
    price: {
        fontSize: 27,
        fontWeight: "bold"
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    location: {
        color: colors.lightTextColor
    }
})

export default Card;