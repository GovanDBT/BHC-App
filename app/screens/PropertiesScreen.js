import React from 'react';
import { FlatList } from 'react-native';

import Screen from './Screen';
import Card from '../components/Card';

const properties = [
    {
        id: 1,
        title: 'Palapye Property',
        location: 'Palapye, Tsere Ward, Plot 4566',
        price: '3,500',
        tag: 'rent',
        image: require('../assets/bhc-house01.jpeg')
    },
    {
        id: 2,
        title: 'Serowe Property',
        location: 'Serowe, Kgama Ward, Plot 7778',
        price: '980,000',
        tag: 'sale',
        image: require('../assets/bhc-house02.jpg')
    },
    {
        id: 3,
        title: 'Tlokweng Property',
        location: 'Tlokweng, Ngane Ward, Plot 7662',
        price: '850,000',
        tag: 'sale',
        image: require('../assets/bhc-house02.jpg')
    },
    {
        id: 4,
        title: 'Village Town Property',
        location: 'Gaborone, Village Ward, 0126',
        price: '5,250',
        tag: 'rent',
        image: require('../assets/bhc-house04.jpg')
    },
]

function PropertiesScreen(props) {
    return (
        <Screen>
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
                    />
                }
            />
        </Screen>
    );
}

export default PropertiesScreen;