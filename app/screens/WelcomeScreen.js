import React from 'react';
import { Button, View } from 'react-native';

import Screen from './Screen';

function WelcomeScreen({ navigation}) {
    return (
        <Screen>
            <Button title='Register Button' onPress={() => navigation.navigate("Register")} />
            <Button title='Login Button' onPress={() => navigation.navigate("Login")} />
        </Screen>
    );
}

export default WelcomeScreen;