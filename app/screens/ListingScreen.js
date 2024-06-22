import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import Screen from './Screen';

const messages =[
    {
        id: 1,
        name: 'T1',
        date: '06/17/2024',
        image: require('../assets/user01.jpg')
    },
    {
        id: 2,
        name: 'T2',
        date: '05/04/2024',
        image: require('../assets/user02.jpg')
    }
]

function ListingScreen(props) {
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => 
                    <ListItem title={item.name} subtitle={item.date} image={item.image}/>
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})

export default ListingScreen;