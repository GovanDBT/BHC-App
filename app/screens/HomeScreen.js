import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import Routes from '../navigation/Routes';
import AppText from '../components/AppText';
import NewsCard from '../components/NewsCard';
import TopHeader from '../components/TopHeader';
import HeaderSection from '../components/HeaderSection'
import AccountSummary from '../components/AccountSummary';
import InformationCenter from '../components/InformationCenter';

const newsFeed = [
    {
        id: 1,
        image: require('../assets/new01.jpg'),
        date: 'June 26, 2024',
        title: 'BHC 2024 Exhibition in Manu',
        description: 'The Botswana Housing Corporation (BHC) recently hosted a grand exhibition in Maun, showcasing their latest housing projects and community initiatives. The event was graced by the presence of Miss Maun, who added a touch of elegance and excitement to the proceedings. Attendees had the opportunity to explore a range of innovative housing solutions,'
    },
    {
        id: 2,
        image: require('../assets/new02.jpg'),
        date: 'June 15, 2024',
        title: 'New housing Project in Serowe',
        description: 'The Botswana Housing Corporation (BHC) is excited to announce the commencement of a new housing development in Serowe. This ambitious project aims to provide high-quality, affordable homes to meet the growing demand for housing in the region. The development will feature a variety of modern, energy-efficient homes designed to accommodate diverse family needs'
    }
];

const information = [
    {
        id: 1,
        title: 'help me find a home',
        description: 'Let us help you find the perfect home for you. Fill in the information we provided to get started'
    },
    {
        id: 2,
        title: 'Housing developments',
        description: 'BHC is dedicated to creating innovative and sustainable housing developments that provide quality'
    },
    {
        id: 3,
        title: 'general inquiries',
        description: 'For any questions or additional information about our services and projects, please contact BHC'
    }
];

function HomeScreen({ navigation }) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
                {/* Top Header */}
                <TopHeader myProperty={() => navigation.navigate(Routes.MY_PROPERTY)} notifications={() => navigation.navigate(Routes.NOTIFICATIONS)} />
                {/** Account Summary */}
                <View style={styles.sectionContainer}>
                    <View style={styles.head}>
                        <AppText size={20} style={styles.sectionHeader}>Dumela Thembi</AppText>
                        <MaterialCommunityIcons style={styles.headIcon} name="hand-wave-outline" size={22} color={colors.primary} />
                    </View>
                    <AccountSummary />
                </View>
                {/** News Feed */}
                <View style={styles.sectionContainer}>
                    <HeaderSection title='Latest News' />
                    <FlatList 
                        data={newsFeed}
                        keyExtractor={news => news.id.toString()}
                        renderItem={({ item }) => 
                            <NewsCard 
                                image={item.image}
                                date={item.date}
                                title={item.title}
                                description={item.description}
                            />
                        }
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                {/** information center */}
                <View style={styles.sectionContainer}>
                    <HeaderSection title='Information Center' />
                    <FlatList 
                        data={information}
                        keyExtractor={info => info.id.toString()}
                        renderItem={({ item }) => 
                            <InformationCenter 
                                title={item.title}
                                description={item.description}
                            />
                        }
                        scrollEnabled={false}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    head: {
        flexDirection: 'row'
    },
    headIcon: {
        marginLeft: 10,
    },
    sectionContainer: {
        marginBottom: 40
    },
    sectionHeader: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
})

export default HomeScreen;