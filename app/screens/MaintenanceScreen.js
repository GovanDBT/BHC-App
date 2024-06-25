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
import colors from "../config/colors";
import Routes from "../navigation/Routes";
import AppText from "../components/AppText";
import TopHeader from "../components/TopHeader";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import HeaderSection from "../components/HeaderSection";

// NOTE:
// const [isEnabled, setIsEnabled] = useState(false);
// const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

const reportProblems = [
  { label: "Damaged Roof", value: 1 },
  { label: "Damaged Tiles", value: 2 },
  { label: "Missing Dust bin", value: 3 },
  { label: "Broken Window", value: 4 },
  { label: "Damaged Gate", value: 5 },
  { label: "Light Shade Missing", value: 6 },
  { label: "Burnt Socket", value: 7 },
  { label: "Blockage Sewer", value: 8 },
  { label: "Vandalized Property", value: 9 },
  { label: "Door lock missing", value: 10 },
  { label: "Damaged Curtain Rails", value: 11 },
];

const category = [
  {label: 'Normal', value: 1},
  {label: 'Urgent', value: 2},
  {label: 'Emergency - 24hrs', value: 3}
]

function MaintenanceScreen({ navigation }) {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false} stickyHeaderIndices={[0]}>
        {/* Top Header */}
        <TopHeader 
            title='Maintenance'
            onPress={() => navigation.navigate(Routes.MY_MAINTENANCE)} 
            notifications={() => navigation.navigate(Routes.NOTIFICATIONS)} 
            customer={() => navigation.navigate(Routes.CUSTOMER_SUPPORT)}
        />
        {/* Your Reports Row */}
        <HeaderSection title='Report History' />

        {/* Emergency container */}
        <View style={styles.emergencyContainer}>
          <View>
            <AppText style={styles.emergencyText}>
              Call BHC Call Center to report a fault on Tel: 315 9902 or 1167 (Landline)
            </AppText>
          </View>
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
            placeholder="FirstName"
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
            keyboardType="numeric"
            name="plotNo"
            placeholder="Plot Number"
            textContentType="none"
            width={200}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            name="telephone"
            placeholder="Telephone"
            textContentType="telephoneNumber"
            width={220}
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            name="mobileNo"
            placeholder="Mobile No."
            textContentType="none"
            width={220}
          />

          <AppText style={styles.problemType}>Categorty:</AppText>

          <View style={styles.picker}>
            <AppPicker
              items={category}
              placeholder={"Select Category"}
            />
          </View>

          <AppText style={styles.problemType}>Type of Problem:</AppText>

          <View style={styles.picker}>
            <AppPicker
              items={reportProblems}
              placeholder={"Select a type of problem"}
            />
          </View>

          <AppTextInput
            style={styles.description}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="description"
            placeholder="Description"
            textContentType="none"
          />

            {/* TODO: Add camera functionality */}
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
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 15,
    padding: 10,
    backgroundColor: colors.primaryTransparentx2,
    marginVertical: 15,
  },
  emergencyText: {
    color: colors.primary, 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 14,
    color: colors.lightTextColor,
    textAlign: 'center',
    marginBottom: 10,
  },
  termsConditions: {
    color: colors.primary,
    textDecorationLine: "underline",
    fontSize: 15,
  },
  problemType: {
    color: colors.lightTextColor,
    marginBottom: 5,
  },
  description: {
    height: 50,
    alignItems: "center",
    
  },
  camera: {
    width: "100%",
    height: 100,
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 20,
    marginBottom: 10,

  },
});

export default MaintenanceScreen;
