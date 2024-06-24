import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Switch,
  TextInput,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./Screen";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppTextInput from "../components/AppTextInput";

// NOTE:
// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

function MaintenanceScreen(props) {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Your Reports Row */}
        <View style={styles.reportsHistory}>
          <AppText style={styles.reportsText}>Your Reports</AppText>
          <View style={styles.historyContainer}>
            <AppText style={styles.historyText}>History</AppText>
            <MaterialCommunityIcons
              name="arrow-right-thin"
              size={28}
              color={colors.primary}
            />
          </View>
        </View>

        {/* Emergency container */}
        <View style={styles.emergencyContainer}>
          <View>
            <AppText style={styles.emergencyText}>Emergency</AppText>
            <AppText style={styles.emergencyText}>
              Will be attended to within 30min
            </AppText>
          </View>
          <Switch
            trackColor={{ false: colors.white, true: colors.white }}
            thumbColor={colors.primary}
            // onValueChange={toggleSwitch}
            // value={isEnabled}
          />
        </View>

        <AppText style={styles.text}>
          Fill in the form below to send a report to our maintenance department
          about any problems in your rented BHC house.{" "}
          <AppText style={styles.termsConditions}>Terms and Conditions</AppText>
        </AppText>

        {/* report fault forms */}
        <AppForm>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="firstname"
            placeholder="Firstname"
            textContentType="name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="Surname"
            placeholder="Surname"
            textContentType="familyName"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="plotNo"
            placeholder="Plot Number"
            textContentType="none"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="telephone"
            placeholder="Telephone"
            textContentType="telephoneNumber"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="mobileNo"
            placeholder="Mobile No."
            textContentType="none"
          />
          <AppText style={styles.problemType}>Type of Problem:</AppText>
         
         
          <AppTextInput
            style={styles.description}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="description"
            placeholder="Description"
            textContentType="none"
          />

          <View style={styles.camera}></View>

          <SubmitButton
            title={"Submit"}
            onPress={() => console.log("Form Submitted")}
          />
        </AppForm>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  reportsHistory: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  historyContainer: {
    flexDirection: "row",
  },
  reportsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  historyText: {
    color: colors.primary,
    fontSize: 18,
  },
  emergencyContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 15,
    padding: 10,
    backgroundColor: colors.primaryTransparentx2,
    marginVertical: 15,
  },
  emergencyText: {
    color: colors.primary,
  },
  text: {
    fontSize: 14,
    color: colors.lightTextColor,
  },
  termsConditions: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontSize: 15,
  },
  problemType: {
    color: colors.lightTextColor,
  },
  description: {
    height: 50,
    alignItems: "center",
  },
  camera: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 20,
    padding: 10,

  }
});

export default MaintenanceScreen;
