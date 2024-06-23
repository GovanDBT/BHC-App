import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, View} from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import SignupButton from "../components/SignupButton";
import SignupSeparator from "../components/SignupSeparator";

function WelcomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} >
      <View style={styles.container}>

        <ImageBackground source={require("../assets/background.png")} style={styles.backgroundImage}>
          <Image source={require("../assets/bhclogo.png")} style={styles.logo} />
        </ImageBackground>

        <View style={styles.formContainer}>
          <AppText style={styles.heading}>Welcome To BHC</AppText>
          <AppText style={styles.welcomeText}>Register or Login to access our products and services</AppText>

          <SignupButton image={require('../assets/google.png')} text='Sign Up With Google' />
          <SignupButton image={require('../assets/facebook.png')} text='Sign Up With Facebook' />

          <SignupSeparator />

          <AppButton title='Create Account' onPress={() => navigation.navigate("Register")} />

          <View style={styles.text}>
            <AppText>Already have an account?</AppText>
            <AppText style={styles.createAccount} onPress={() => navigation.navigate("Login")}>Login</AppText>
          </View>

        </View>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '120%',
  },
  logo: {
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  heading: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 10
  },
  text: {
    flexDirection: "row",
    justifyContent: 'center',
    marginVertical: 10,
  },
  createAccount: {
    marginLeft: 5,
    color: colors.primary,
    fontWeight: 'bold'
  },
  welcomeText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.lightTextColor,
    marginBottom: 8,
  }
});

export default WelcomeScreen;
