import React from 'react';
import { FlatList } from 'react-native';

import NotificationItem from '../components/NotificationItem';
import ListItemSeparator from '../components/ListItemSeparator';

const messages = [
    {
        id: 1,
        title: 'Customer Service',
        description: 'How you doing?',
        date: 'today'
    },
    {
        id: 2,
        title: 'Maintenance',
        description: 'Routine Maintenance coming soon',
        date: '2 days ago'
    },
    {
        id: 3,
        title: 'BHC Management',
        description: 'Your application has been approved',
        date: '20/06/2024'
    }
]

function NotificationScreen(props) {
    return (
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => 
                <NotificationItem 
                    title={item.title}
                    description={item.description}
                    date={item.date}
                    onPress={ () => console.log(item)}
                />
            }
            ItemSeparatorComponent={ListItemSeparator}
        />
    );
}

export default NotificationScreen;