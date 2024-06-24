import React from 'react';
import { Image, View, StyleSheet, Dimensions, ScrollView  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import PropertyDetailsTag from '../components/PropertyDetailsTag';
import HeaderSection from '../components/HeaderSection';
import SectionContainer from '../components/SectionContainer';

const { width } = Dimensions.get('window');

const images = [
    require('../assets/house01-sitting-room.jpg'),
    require('../assets/house01-kitchen.jpg'),
    require('../assets/house01-hall-way.jpg'),
    require('../assets/house01-plan.png')
]

function MyPropertyScreen(props) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Property Image */}
                <Image style={styles.image} source={require('../assets/bhc-house01.jpeg')} />
                {/* Property type and location */}
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>BHC Palapye Property</AppText>
                    <AppText style={styles.location}>Palapye, Tsere Ward, 4566</AppText>
                </View>
                {/* Property Tags */}
                <View style={styles.tags}>
                    <PropertyDetailsTag title="2 Bed" iconName="bed-king-outline" />
                    <PropertyDetailsTag title="1 Bath" iconName="shower" />
                    <PropertyDetailsTag title="50x100" iconName="pencil-ruler" />
                </View>
                {/* Property Management */}
                <SectionContainer>
                    <View style={styles.managementContainer}>
                        <HeaderSection title='Property Management' link={false} />
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
                </SectionContainer>
                {/* Property Details */}
                <SectionContainer>
                    <HeaderSection title='Property Details' link={false} />
                    <AppText style={styles.detailsText} size={16} >
                        The property has a fenced backyard, covered patio and enough space for parking two vehicles. There is open floor with a fully equipped kitchen and cozy living room area. It’s located in Palapye in Tsere ward plot 4566 and is owned by BHC.
                    </AppText>
                </SectionContainer>
                {/* Room images */}
                <SectionContainer>
                    <HeaderSection title='Rooms' link={false} />
                    <View style={styles.roomImagesContainer}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            {images.map((image, index) => (
                            <Image key={index} source={image} style={styles.roomImages} />
                            ))}
                        </ScrollView>
                    </View>
                </SectionContainer>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
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
})

export default MyPropertyScreen;