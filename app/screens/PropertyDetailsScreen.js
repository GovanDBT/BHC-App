import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import Tag from '../components/Tag';
import PropertyDetailsTag from '../components/PropertyDetailsTag';

function PropertyDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/bhc-house01.jpeg')} />
            <View style={styles.detailsContainer}>
                <View style={styles.header}>
                    <AppText style={styles.price}>P4,500</AppText>
                    <Tag title="rent"/>
                </View>
                <AppText style={styles.title}>BHC Palapye Property</AppText>
                <AppText style={styles.location}>Palapye, Tsere Ward, 4566</AppText>
            </View>
            <View style={styles.tags}>
                <PropertyDetailsTag title="2 Bed" iconName="bed-king-outline" />
                <PropertyDetailsTag title="1 Bath" iconName="shower" />
                <PropertyDetailsTag title="50x100" iconName="pencil-ruler" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        borderRadius: 20
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
        color: colors.primary
    },
    title: {
        marginTop: 10,
        fontSize: 22
    },
    location: {
        color: colors.lightTextColor
    },
    tags: {
        marginVertical: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})

export default PropertyDetailsScreen;