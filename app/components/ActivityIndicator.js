import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;

    return (
        <LottieView 
            loop
            autoPlay
            source={require('../assets/animations/load.json')} 
        />
    );
}

export default ActivityIndicator;