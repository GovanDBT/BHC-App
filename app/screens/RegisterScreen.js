import React from 'react';
import { Button, View } from 'react-native';

function RegisterScreen({ navigation }) {
   return (
        <View>
            <Button title='Register' onPress={() => navigation.navigate("Login")} />
            <Button title='Login' onPress={() => navigation.navigate("Login")} />
        </View>
    );
}

export default RegisterScreen;