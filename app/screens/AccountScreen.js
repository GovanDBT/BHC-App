import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import Routes from '../navigation/Routes';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title: 'My Listings',
        icon: {
            name: 'format-list-bulleted'
        },
        targetScreen: Routes.MY_LISTINGS
    },
    {
        title: 'About Us',
        icon: {
            name: 'information-outline'
        },
        targetScreen: Routes.ABOUT_US
    },
    {
        title: 'Information Center',
        icon: {
            name: 'folder-information-outline'
        },
        targetScreen: Routes.INFORMATION_CENTER
    },
    {
        title: 'Feedback',
        icon: {
            name: 'chat-processing-outline'
        },
        targetScreen: Routes.ACCOUNT
    },
    {
        title: 'Follow Us',
        icon: {
            name: 'thumb-up-outline'
        },
        targetScreen: Routes.ACCOUNT
    },
]

const menuSettings = [
    {
        title: 'Settings',
        icon: {
            name: 'cog-outline'
        },
        targetScreen: Routes.ACCOUNT
    },
    {
        title: 'Support Center',
        icon: {
            name: 'account-tie-voice-outline'
        },
        targetScreen: Routes.CUSTOMER_SUPPORT
    },
]

function AccountScreen({ navigation }) {
    const { user, logOut } = useAuth();

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <ListItem 
                        title='SkillRanker User'
                        subtitle='info@skillranker.co.bw'
                        image={require('../assets/thembi.jpg')}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList 
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) =>
                            <ListItem 
                                title={item.title} 
                                icon={item.icon.name} 
                                onPress={() => navigation.navigate(item.targetScreen)}
                            />
                        }
                        scrollEnabled={false}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList 
                        data={menuSettings}
                        keyExtractor={menuSetting => menuSetting.title}
                        ItemSeparatorComponent={ListItemSeparator}
                        renderItem={({ item }) =>
                            <ListItem 
                                title={item.title} 
                                icon={item.icon.name} 
                                onPress={() => navigation.navigate(item.targetScreen)}
                            />
                        }
                        scrollEnabled={false}
                    />
                    <ListItem 
                        title='Log Out'
                        icon='logout'
                        iconSize={30}
                        style={styles.logout}
                        onPress={() => logOut()}
                    />
                </View>
                <AppText size={12} style={styles.copyright}>Copyright {<MaterialCommunityIcons name="copyright" size={12} color={colors.lightTextColor} />} LabRats 2024. All Rights Reserved</AppText>
            </ScrollView>
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
    },
    logout: {
        borderTopWidth: 1,
        borderTopColor: colors.inputBorderColor
    }
})

export default AccountScreen;