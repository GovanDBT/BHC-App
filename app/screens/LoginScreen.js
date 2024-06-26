import React from "react";
import { View, StyleSheet, Image, ScrollView, ImageBackground, Alert } from "react-native";
import * as Yup from "yup";
import axios from "axios"; // Import axios

import colors from "../config/colors";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", {
        email: values.email,
        password: values.password,
      });

      if (response.data.success) {
        // Save the token (you can use AsyncStorage or any other method)
        console.log('Token:', response.data.token); // Add this line to debug

        // Navigate to the Home screen
        navigation.navigate("Home");
      } else {
        Alert.alert("Login Failed", response.data.message);
      }
    } catch (error) {
      console.error('Error:', error); // Add this line to debug
      Alert.alert("An error occurred", "Please try again.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <ImageBackground source={require("../assets/background.png")} style={styles.backgroundImage}>
          <Image source={require("../assets/bhclogo.png")} style={styles.logo} />
        </ImageBackground>
        <View style={styles.formContainer}>
          <AppText style={styles.heading}>Login to your Account</AppText>
          <AppText style={styles.welcomeText}>Welcome back, please enter your details</AppText>

          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit} // Use the handleSubmit function
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              name="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <View style={styles.CheckBoxRow}>
              <AppText style={styles.rememberMe}>Remember me</AppText>
              <AppText style={styles.forgotPassword} onPress={() => navigation.navigate("ForgotPassword")}>Forgot password?</AppText>
            </View>
            <SubmitButton title="Login" />
          </AppForm>

          <View style={styles.text}>
            <AppText>Don't have an account?</AppText>
            <AppText style={styles.createAccount} onPress={() => navigation.navigate("Register")}>Create account</AppText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // justifyContent: "center",
    // backgroundColor: "white",
  },
  container: {
    // flexDirection: "column",
    // justifyContent: "center",
    // backgroundColor: "white",
    flex: 1,
  },
  imageContainer: {
    // flex: 1,
    // width: "100%",
    // alignItems: "center",
    // alignSelf:"flex-start",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '120%',
  },
  logo: {
    // width: '60%',
    // height: '20%',
    // marginTop: 55,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 15,
    // width: "100%",
    // height: "30%",
    // padding: 20,
    // paddingTop: 5,
    // alignItems: "center",
    backgroundColor: colors.white,
    // overflow: 'hidden',
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
  CheckBoxRow: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  welcomeText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.lightTextColor,
    marginBottom: 8,
  },
  forgotPassword: {
    // fontSize: 14,
    // marginLeft: 50,
    textDecorationLine:"underline",
  },
  rememberMe: {
    // fontSize: 14,
  }
});


export default LoginScreen;
