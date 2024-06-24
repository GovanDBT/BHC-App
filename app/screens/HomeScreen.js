import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import HeaderSection from '../components/HeaderSection'
import AppText from '../components/AppText';
import AccountSummary from '../components/AccountSummary';
import NewsCard from '../components/NewsCard';

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
]

function HomeScreen(props) {
    return (
        <Screen>
            <ScrollView>
                <View style={styles.sectionContainer}>
                    <View style={styles.head}>
                        <AppText size={20} style={styles.sectionHeader}>Dumela Thembi</AppText>
                        <MaterialCommunityIcons style={styles.headIcon} name="hand-wave-outline" size={22} color={colors.primary} />
                    </View>
                    <AccountSummary />
                </View>
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