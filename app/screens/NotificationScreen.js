import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import NotificationItem from '../components/NotificationItem';
import ListItemSeparator from '../components/ListItemSeparator';
import NotificationItemDeleteAction from '../components/NotificationItemDeleteAction';

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }

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
                    renderRightActions={() => 
                        <NotificationItemDeleteAction onPress={() => handleDelete(item)} />
                    }
                />
            }
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 3,
                        title: 'BHC Management',
                        description: 'Your application has been approved',
                        date: '20/06/2024'
                    }
                ])
            }}
        />
    );
}

export default NotificationScreen;