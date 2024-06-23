import React from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

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
                        <View style={styles.header}>
                            <AppText style={styles.title}>{title}</AppText>
                            <AppText style={styles.text} size={13}>{date}</AppText>
                        </View>
                            <AppText style={styles.text}>{description}</AppText>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3
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