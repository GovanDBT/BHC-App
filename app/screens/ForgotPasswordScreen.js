import React from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";

import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function ForgotPasswordScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/background.png")}
          style={styles.backgroundImage}
        />
        <Image source={require("../assets/bhclogo.png")} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <AppText style={styles.heading}>Reset Password</AppText>

        <View style={styles.text}>
          <AppText style={styles.resetText}>
            Enter your email registered with us.Follow the link sent to you to
            reset the password.
          </AppText>
          <AppText style={styles.loginText}>Login</AppText>
        </View>

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
      </View>
    </View>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  backgroundImage: {
    width: "100%",
    height: "50%",
    position: "absolute",
  },
  logo: {
    width: "40%",
    height: "18%",
    marginTop: 55,
  },
  formContainer: {
    width: "100%",
    height: "25%",
    padding: 20,
    // alignItems: "center",
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
  },
  heading: {
    fontSize: 32,
    alignSelf: "center",
    color: colors.textColor,
    fontWeight: 600,
  },
  text: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"flex-end",
    padding: 19,

  },
  loginText: {
    color: colors.primary,
    textDecorationLine: "underline",
    position:"absolute",
    fontSize: 16,
},
  resetText: {
    fontSize: 14,
    color: colors.lightTextColor,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default ForgotPasswordScreen;
