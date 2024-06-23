import React from "react";
import { Image, View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import * as Yup from "yup";

import colors from "../config/colors";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function ForgotPasswordScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} >
      <View style={styles.container}>
        <ImageBackground source={require("../assets/background.png")} style={styles.backgroundImage}>
          <Image source={require("../assets/bhclogo.png")} />
        </ImageBackground>
        <View style={styles.formContainer}>
          <AppText style={styles.heading}>Reset Password</AppText>
            <AppText style={styles.resetText}>
              Enter your email registered with us. Follow the link sent to you to
              reset the password.
            </AppText>

          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => console.log(values)}
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

            <SubmitButton title="Reset Password" onSubmit={() => navigation.navigate("Login")}/>
          </AppForm>

          <AppText style={styles.login} onPress={() => navigation.navigate("Login")} >Back To Login</AppText>
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
  imageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '120%',
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
  login: {
    marginVertical: 8,
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  resetText: {
    fontSize: 14,
    textAlign: 'center',
    color: colors.lightTextColor,
    marginBottom: 8,
  },
});

export default ForgotPasswordScreen;
