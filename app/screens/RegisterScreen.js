import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, View} from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().label("Username"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  confirmPassword: Yup.string().required().min(8).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} >
      <View style={styles.container}>
        <ImageBackground source={require("../assets/background.png")} style={styles.backgroundImage}>
          <Image source={require("../assets/bhclogo.png")} style={styles.logo} />
        </ImageBackground>
        <View style={styles.formContainer}>
          <AppText style={styles.heading}>Sign Up With BHC</AppText>
          <AppText style={styles.welcomeText}>Fill in the registration data</AppText>

          <AppForm
            initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="default"
              name="username"
              placeholder="Username"
              textContentType="username"
            />
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
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              name="confirmpassword"
              placeholder="Confirm Password"
              secureTextEntry
              textContentType="password"
            />
            <SubmitButton
              title="Register"
              onPress={() => navigation.navigate("Login")}
            />
          </AppForm>

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
    // justifyContent: "center",
    // backgroundColor: "white",
  },
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    // flex: 1,
    // width: "100%",
    // alignItems: "center",
    // alignSelf: "flex-start",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '120%',
  },
  logo: {
    // width: "60%",
    // height: "20%",
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
    // position: "absolute",
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
    // flexDirection: "row",
    // marginVertical: 10,
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
    // textDecorationLine: "underline",
  },
  rememberMe: {
    // fontSize: 14,
  },
});

export default RegisterScreen;
