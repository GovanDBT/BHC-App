import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Screen from './Screen';
import colors from '../config/colors';
import AppText from '../components/AppText';
import HeaderSection from '../components/HeaderSection';

function MyMaintenanceScreen(props) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <HeaderSection title='Routin Repairs' link={false} />
                    <AppText style={styles.text}>Most of our repairs are carried out as part of a planned maintenance cycle. For example we aim to do major decorations/repairs every five years and will often carry out a survey of properties prior to this</AppText>
                    <AppText style={styles.text}>You will be notified in advance of when such repairs are planned so you can agree access arrangements and highlight any maintenance work that you believe is required</AppText>
                    <AppText style={styles.text}>Where repairs become necessary outside this planned cycle, you should notify our call center (Tel: 3159902 cell/landline or 1167 landline only) and let them know the following:</AppText>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Tenant’s name and plot number</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>The nature of the problem giving as much detail as possible to determine the urgency</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Convenient/ suitable times to send in someone to resolve maintenance query</AppText>
                    </View>

                    <HeaderSection title='Chargeable Maintenance Items' link={false} />
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Damaged roof tiles/sheet caused by installation of satellite dish</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Ceiling holes and dirty/ peeling wall plaster due to installation of alarm system</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Missing dust bin (without police report)</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Dirty walls if less than 3 year last painted</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Broken windows</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Damaged gates due to careless driving</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Light shades missing either wall or ceiling</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Burnt sockets except kitchen (only burnt not fault switch)</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Blockages sewer and toilets</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Vandalized properties</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Door Locks and cupboard locks only when there are missing keys</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Sink/bath/hand wash basin plug or stopper</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Toilet seat covers</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Damaged curtain rails</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Missing towel rail/toilet roll holder</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Broken hand basin</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Broken toilet pan</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Burnt Formica tops</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Vandalized doors</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Painting to make good</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Barrel bolts</AppText>
                    </View>
                    <View style={styles.bullet}>
                        <MaterialCommunityIcons style={styles.icon} name="check-circle-outline" size={18} color={colors.primary} />
                        <AppText style={styles.bulletText}>Not exhaustive</AppText>
                    </View>

                    <HeaderSection title='Report Categories' link={false} />
                    <AppText style={styles.header}>Emergency</AppText>
                    <AppText style={styles.text}>(Safety, Health, Economic) i.e. falling ceiling, overflowing/blocked manholes and water leakages) to be attended within 24hr of reporting</AppText>

                    <AppText style={styles.header}>Urgent</AppText>
                    <AppText style={styles.text}>Comprise faulty door locks, flickering fluorescent etc. to be attended within 72hrs of reporting</AppText>

                    <AppText style={styles.header}>Normaly</AppText>
                    <AppText style={styles.text}>Ceiling and wall stains to be attended within 10 days or reporting</AppText>

                    <HeaderSection title='Maintenance Report Process' link={false} />
                    <AppText style={styles.header}>Step 1</AppText>
                    <AppText style={styles.text}>Call BHC Call Centre to report a fault on Tel 315 9902 or 1167 (From BTC Landline). You will receive a reference number, save it for making follow ups</AppText>

                    <AppText style={styles.header}>Step 2</AppText>
                    <AppText style={styles.text}>A contractor assigned by BHC will call to make an appointment to come and carry out repairs. The tenant is to ask the contractor for the reference number and check it against the one provided when making a report for security reasons</AppText>

                    <AppText style={styles.header}>Step 3</AppText>
                    <AppText style={styles.text}>If there are any fees to be paid by the tenant, they will be accordingly advised. This happens in case of blockage where they have to pay before any work can be done. The tenant will be given a receipt to acknowledge payment</AppText>

                    <AppText style={styles.header}>Step 4</AppText>
                    <AppText style={styles.text}>A contractor assigned by BHC will come to the tenant’s rented house to carry out repairs during working hours. The tenant is to ensure there is someone authorized at the house during the repairs. When the contractor completes repair works, the tenant or their designate will be required to sign a work order form provided by the contractor</AppText>

                    <AppText style={styles.header}>Step 5</AppText>
                    <AppText style={styles.text}>Only emergencies should be reported to the Call Centre after hours</AppText>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    bullet: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center'
    },
    bulletText: {
        fontSize: 15,
        color: colors.lightTextColor,
    },
    header: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.primary,
    },
    icon: {
        marginRight: 10
    },
    text: {
        fontSize: 15,
        color: colors.lightTextColor,
        marginBottom: 15,
    }
})

export default MyMaintenanceScreen;