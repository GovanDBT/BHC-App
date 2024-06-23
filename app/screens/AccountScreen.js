import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import AppText from '../components/AppText';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted'
        }
    },
    {
        title: 'About Us',
        icon: {
            name: 'information-outline'
        }
    },
    {
        title: 'Information Center',
        icon: {
            name: 'folder-information-outline'
        }
    },
    {
        title: 'Feedback',
        icon: {
            name: 'chat-processing-outline'
        }
    },
    {
        title: 'Follow Us',
        icon: {
            name: 'thumb-up-outline'
        }
    },
]

const menuSettings = [
    {
        title: 'Settings',
        icon: {
            name: 'cog-outline'
        }
    },
    {
        title: 'Support Center',
        icon: {
            name: 'account-tie-voice-outline'
        }
    },
    {
        title: 'Logout',
        icon: {
            name: 'logout'
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem 
                    title='Thembi Dibotelo'
                    subtitle='govan.dibotelo@gmail.com'
                    image={require('../assets/thembi.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItems.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem title={item.title} icon={item.icon.name} />
                    }
                />
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuSettings}
                    keyExtractor={menuSetting => menuSetting.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem title={item.title} icon={item.icon.name} />
                    }
                />
            </View>
            <AppText size={12} style={styles.copyright}>Copyright {<MaterialCommunityIcons name="copyright" size={12} color={colors.lightTextColor} />} LabRats 2024. All Rights Reserved</AppText>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
        borderTopWidth: 1,
        borderTopColor: colors.inputBorderColor,
    },
    copyright: {
        color: colors.lightTextColor,
        textAlign: 'center'
    }
})

export default AccountScreen;