import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, StyleSheet, View } from 'react-native';

import Screen from './Screen';
import Card from '../components/Card';
import listingsApi from '../api/listings';
import Routes from '../navigation/Routes';
import AppText from '../components/AppText';
import TopHeader from '../components/TopHeader';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import useApi from '../hooks/useApi';


const properties = [
    {
        id: 1,
        title: 'Palapye Property',
        location: 'Palapye, Tsere Ward, Plot 4566',
        price: '3,500',
        tag: 'Rent',
        image: require('../assets/bhc-house01.jpeg')
    },
    {
        id: 2,
        title: 'Serowe Property',
        location: 'Serowe, Kgama Ward, Plot 7778',
        price: '980,000',
        tag: 'Sale',
        image: require('../assets/bhc-house02.jpg')
    },
    {
        id: 3,
        title: 'Tlokweng Property',
        location: 'Tlokweng, Ngane Ward, Plot 7662',
        price: '850,000',
        tag: 'Sale',
        image: require('../assets/bhc-house03.jpg')
    },
    {
        id: 4,
        title: 'Village Town Property',
        location: 'Gaborone, Village Ward, 0126',
        price: '5,250',
        tag: 'Rent',
        image: require('../assets/bhc-house04.jpg')
    },
]

function PropertiesScreen({ navigation }) {
    const propertyToDisplay = properties.filter(property => property.id === 2);

    const getListingsApi = useApi(listingsApi.getListings);

    useEffect(() => {
        getListingsApi.request();
    }, []);

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                {/* Top Header */}
                <TopHeader 
                    title='my listings'
                    onPress={() => navigation.navigate(Routes.MY_LISTINGS)} 
                    notifications={() => navigation.navigate(Routes.NOTIFICATIONS)} 
                    customer={() => navigation.navigate(Routes.CUSTOMER_SUPPORT)}
                />
                {getListingsApi.error && <>
                        <AppText style={styles.error}>Could not retrieve the properties listings</AppText>
                        <AppButton title='Retry' onPress={loadListings} />
                </>}
                <View style={styles.container}>
                    <AppText size={20} style={styles.text}>Popular Properties</AppText>
                    {/* <ActivityIndicator animating={getListingsApi.loading} size='small'/> */}
                    <FlatList
                        data={properties}
                        keyExtractor={property => property.id.toString()}
                        renderItem={({ item }) =>
                            <Card 
                                image={item.image}
                                price={item.price}
                                tagName={item.tag}
                                title={item.title}
                                location={item.location}
                                onPress={() => navigation.navigate(Routes.PROPERTY_DETAILS, item)}
                            />
                        }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.list}
                    />
                </View>
                <View style={styles.container}>
                    <AppText size={20} style={styles.text}>Recently Added</AppText>
                    <FlatList
                        data={properties}
                        keyExtractor={property => property.id.toString()}
                        renderItem={({ item }) =>
                            <Card 
                                image={item.image}
                                price={item.price}
                                tagName={item.tag}
                                title={item.title}
                                location={item.location}
                                onPress={() => navigation.navigate(Routes.PROPERTY_DETAILS, item)}
                            />
                        }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.list}
                    />
                </View>
                <View style={styles.container}>
                    <AppText size={20} style={styles.text}>Recently Viewed</AppText>
                    <FlatList
                        data={propertyToDisplay}
                        keyExtractor={property => property.id.toString()}
                        renderItem={({ item }) =>
                            <Card 
                                image={item.image}
                                price={item.price}
                                tagName={item.tag}
                                title={item.title}
                                location={item.location}
                                onPress={() => navigation.navigate(Routes.PROPERTY_DETAILS, item)}
                            />
                        }
                        contentContainerStyle={styles.list}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 15
    },
    error: {
        fontSize: 16,
        textAlign: 'center',
        color: colors.primary,
        fontWeight: 'bold'
    },
    list: {
        paddingVertical: 20
    },
    text: {
        fontWeight: 'bold'
    }
});

export default PropertiesScreen;