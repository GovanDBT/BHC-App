import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Constants from 'expo-constants';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.container, style]}>
                { children }
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
    },
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }
})

export default Screen;