import React from 'react';
import { View, StyleSheet } from 'react-native';

function SectionContainer({ children, style }) {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    }
})

export default SectionContainer;