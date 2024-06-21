import React from 'react';
import { Button, View } from 'react-native';

function LoginScreen({ navigation }) {
     return (
        <View>
            <Button title='Login' onPress={() => navigation.navigate("Home")} />
            <Button title='Register' onPress={() => navigation.navigate("Register")} />
            <Button title='Forgot Password' onPress={() => navigation.navigate("ForgotPassword")} />
        </View>
    );
}

export default LoginScreen;