import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen({ navigation }) {
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
        <AppText style={styles.heading}>Login to your Account</AppText>

        <AppText style={styles.welcomeText}>
          Welcome back, please enter your details.
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
          <SubmitButton title="Login" onPress={() => navigation.navigate("Home")}/>
        </AppForm>

        <View style={styles.text}>
          <AppText>Don't have an account?</AppText>
          <AppText style={styles.createAccount}>Create account</AppText>
        </View>
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
    alignSelf:"flex-start",
  },
  backgroundImage: {
    width: "100%",
    height: "50%",
    position: "absolute",
  },
  logo: {
    width: '40%',
    height: '18%',
    marginTop: 55,
  },
  formContainer: {
    width: "100%",
    height: '30%',
    padding:20,
    paddingTop: 5,
    alignItems: "center",
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
    marginVertical: 10,

  },
  createAccount: {
    marginLeft: 5,
    color: colors.primary,
  },
  CheckBoxRow: {
    flexDirection: "row",
    marginVertical: 10,
  },
  welcomeText: {
    fontSize: 14,
    color: colors.lightTextColor,
    marginBottom: 5,
  },
  forgotPassword: {
    fontSize: 14,
    marginLeft: 50,
    textDecorationLine:"underline",
  },
  rememberMe: {
    fontSize: 14,
  }
});

export default LoginScreen;
