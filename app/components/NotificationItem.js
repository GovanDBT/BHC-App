import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from './AppText';
import colors from '../config/colors';

function NotificationItem({ title, description, date, onPress, renderRightActions }) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight 
                    underlayColor={colors.inputBorderColor}
                    onPress={onPress}
                >
                    <View style={styles.container}>
                        <View style={styles.detailsContainer}>
                            <View style={styles.header}>
                                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                                <AppText style={styles.text} size={13}>{date}</AppText>
                            </View>
                                <AppText style={styles.text} numberOfLines={1}>{description}</AppText>
                        </View>
                            <MaterialCommunityIcons name='chevron-right' size={25} color={colors.lightTextColor} />
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17
    },
    text: {
        color: colors.lightTextColor
    }
})

export default NotificationItem;