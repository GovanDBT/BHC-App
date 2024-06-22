import React from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppText from '../components/AppText';
import Tag from '../components/Tag';
import PropertyDetailsTag from '../components/PropertyDetailsTag';

const images = [
    require('../assets/house01-sitting-room.jpg'),
    require('../assets/house01-kitchen.jpg'),
    require('../assets/house01-hall-way.jpg'),
    require('../assets/house01-plan.png')
]

const { width } = Dimensions.get('window');

function PropertyDetailsScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                <View style={styles.sectionContainer}>
                    <View style={styles.managementContainer}>
                        <AppText style={styles.headerText} size={20}>Property Management</AppText>
                    </View>
                    <View style={styles.contactsContainer}>
                        <View style={styles.contacts}>
                            <MaterialCommunityIcons style={{marginRight: 10}} name="email-outline" size={24} color={colors.textColor} />
                            <AppText>rent@bhc.bw</AppText>
                        </View>
                        <View style={styles.contacts}>
                            <MaterialCommunityIcons style={{marginRight: 10}} name="phone-outline" size={24} color={colors.textColor} />
                            <AppText>(+267)364 6900</AppText>
                        </View>
                    </View>
                </View>
                <View style={styles.sectionContainer}>
                    <AppText style={styles.headerText} size={20}>Property Details</AppText>
                    <AppText style={styles.detailsText} size={16} >
                        The property has a fenced backyard, covered patio and enough space for parking two vehicles. There is open floor with a fully equipped kitchen and cozy living room area. It’s located in Palapye in Tsere ward plot 4566 and is owned by BHC.
                    </AppText>
                </View>
                <View style={styles.sectionContainer}>
                    <AppText style={styles.headerText} size={20}>Rooms</AppText>
                    <View style={styles.roomImagesContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {images.map((image, index) => (
                            <Image key={index} source={image} style={styles.roomImages} />
                            ))}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    sectionContainer: {
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 20
    },
    roomImages: {
        width: width - 120,
        height: 150,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    roomImagesContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
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
        color: colors.primary,
        fontWeight: "bold"
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
    },
    headerText: {
        fontWeight: "bold"
    },
    detailsText: {
        color: colors.lightTextColor,
        lineHeight: 23
    },
    contactsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    contacts: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10
    },
    managementContainer: {
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
    }
})

export default PropertyDetailsScreen;