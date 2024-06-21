import React from 'react';
import { Button, View } from 'react-native';

function ForgotPasswordScreen({ navigation }) {
    return (
        <View>
            <Button title='Reset Password' onPress={() => navigation.navigate("Login")} />
            <Button title='Cancel' onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

export default ForgotPasswordScreen;