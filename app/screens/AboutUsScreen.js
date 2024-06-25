import React from 'react';
import { Image, ScrollView, View, StyleSheet } from 'react-native';

import Screen from './Screen';
import AppText from '../components/AppText';
import colors from '../config/colors';

function AboutUsScreen(props) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={require('../assets/BHC-HOUSES.jpg')} />
                <View>
                    <AppText style={styles.header}>Welcome To BHC</AppText>
                    <AppText style={styles.text}>Botswana Housing Corporation is a parastatal under the Ministry of Transport & Public Works.  The Corporation was established by an Act of Parliament (CAP 74.03) of 1971.  In brief, the Corporation’s mandate as outlined under section 14 of the BHC Act is as follows:-</AppText>
                    <AppText style={styles.text}>To provide for  the housing, office and other building needs of the government and local authorities</AppText>
                    <AppText style={styles.text}>To provide for and to assist and to make arrangements for other persons to meet the requirements of paragraph</AppText>
                    <AppText style={styles.text}>To undertake and carry-out and to make arrangements for other persons to undertake and carry-out building schemes in Botswana</AppText>
                    <AppText style={styles.text}>Effective from 1st April 2012, the Corporation’s mandate has been expanded in accordance with Presidential Directive Cab 20 (B)/2010. The directive pronounced that all Government housing implementation programmes be transferred to BHC to operate as Government’s Single Housing Authority (SiHA). In compliance with the directive, BHC is as from 1st April 2012 responsible for the construction of turnkey SHHA projects as well as District Housing and other housing programmes pronounced by government from time to time such as the Public Housing Initiative and Youth Housing Initiative</AppText>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    header: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: colors.inputBorderColor,
        marginBottom: 15,
        color: colors.primary
    },
    image: {
        width: '100%',
        height: 180,
        marginBottom: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 15,
        color: colors.lightTextColor,
        marginBottom: 20
    },
})

export default AboutUsScreen;