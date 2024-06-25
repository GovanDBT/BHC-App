import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Screen from './Screen';
import AppText from '../components/AppText';
import HeaderSection from '../components/HeaderSection';
import SectionContainer from '../components/SectionContainer';
import colors from '../config/colors';

function CustomerSupportScreen(props) {
    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    {/* Head Office */}
                    <SectionContainer>
                        <HeaderSection title='Head Office' link={false} />
                        <AppText style={styles.text}>Corner Pilane & Queens Roads, Plot 5129</AppText>
                        <AppText style={styles.text}>P O Box 412, Gaborone</AppText>
                        <AppText style={styles.text}>Tel: (+267) 360 5100</AppText>
                        <AppText style={styles.text}>Fax: (+267) 395 2070</AppText>
                    </SectionContainer>
                    {/* Regional Office */}
                    <SectionContainer>
                        <HeaderSection title='Regional Office - Gaborone Area' link={false} />
                        <AppText style={styles.text}>Lejara Road, Broadhurst Industrial, Plot 10236/7</AppText>
                        <AppText style={styles.text}>P O Box 168, Gaborone</AppText>
                        <AppText style={styles.text}>Tel: (+267) 391 2335</AppText>
                        <AppText style={styles.text}>Tel: (+267) 364 6900</AppText>
                        <AppText style={styles.text}>Fax: (+267) 397 5931</AppText>
                    </SectionContainer>
                    {/* Call Center */}
                    <SectionContainer>
                        <HeaderSection title='Call Center' link={false} />
                        <AppText style={styles.text}>Tel: 188 889 - Across all Networks</AppText>
                        <AppText style={styles.text}>Tel: (+267) 315 9902</AppText>
                    </SectionContainer>
                    {/* Kanye */}
                    <SectionContainer>
                        <HeaderSection title='Kanye Office' link={false} />
                        <AppText style={styles.text}>Sebonego Ward, Plot 304</AppText>
                        <AppText style={styles.text}>P O Box M293, Kanye</AppText>
                        <AppText style={styles.text}>Tel: (+267) 544 4080 (Switchboard)</AppText>
                        <AppText style={styles.text}>Tel: (+267) 548 0055 (Direct line)</AppText>
                        <AppText style={styles.text}>Fax: (+267) 544 4076</AppText>
                    </SectionContainer>
                    {/* Molepolole */}
                    <SectionContainer>
                        <HeaderSection title='Molepolole Office' link={false} />
                        <AppText style={styles.text}>Khonou Ward, Plot 1702</AppText>
                        <AppText style={styles.text}>P O Box 2717, Molepolole</AppText>
                        <AppText style={styles.text}>Tel: (+ 267) 590 6356 (Switchboard)</AppText>
                        <AppText style={styles.text}>Tel: (+267) 590 6272 (Direct line)</AppText>
                        <AppText style={styles.text}>Fax: (+ 267) 590 6258</AppText>
                    </SectionContainer>
                    {/* Palapye */}
                    <SectionContainer>
                        <HeaderSection title='Palapye Office' link={false} />
                        <AppText style={styles.text}>Morupule Ward, Palapye Junction, Plot No. 8MQ1</AppText>
                        <AppText style={styles.text}>P O Box 894, Palapye</AppText>
                        <AppText style={styles.text}>Tel: (+267) 492 1075</AppText>
                        <AppText style={styles.text}>Fax: (+267) 492 1076</AppText>
                    </SectionContainer>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.lightTextColor,
        marginBottom: 10
    }
})

export default CustomerSupportScreen;