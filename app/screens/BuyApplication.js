import React, { useState } from "react";
import Screen from "./Screen";
import { ScrollView, StyleSheet, View } from "react-native";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppText from "../components/AppText";
import AppPicker from "../components/AppPicker";
import colors from "../config/colors";
import AppDatePicker from "../components/AppDatePicker";

const age = [
  { label: "18-21", value: 1 },
  { label: "21-30", value: 2 },
  { label: "30+", value: 3 },
];

const employementStatus = [
  { label: "Student", value: 1 },
  { label: "Unemployed", value: 2 },
  { label: "Employed", value: 3 },
  { label: "Self Employed", value: 4 },
];

const ownBHCHouses = [
  { label: "Yes", value: 1 },
  { label: "No", value: 2 },
];

const preferedHouse = [
  { label: "House", value: 1 },
  { label: "TwinHouse", value: 2 },
  { label: "Flat", value: 3 },
];

const bedrooms = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
];

function BuyApplication(props) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>

        <AppText style={styles.text}>
          We hope we can assist you in finding your new home. We ask that you
          provide your details so that we can contact you, should a property
          suiting your requirements become available. Please note that we will
          only use the information you have provided to us to contact you should
          a property for sale become available.
        </AppText>

        <AppForm>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="fullname"
            placeholder="Fullname"
            textContentType="name"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="nationality"
            placeholder="Nationality"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="postalAddress"
            placeholder="Postal Address"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="mobileNo"
            placeholder="Mobile No"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="telephoneNo"
            placeholder="Telephone"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="email"
            placeholder="Email Address"
            textContentType="email"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="occupation"
            placeholder="Applicants Occupation"
            textContentType="none"
          />

          <View>
            <AppText style={styles.text}>Age</AppText>
            <View style={styles.picker}>
              <AppPicker items={age} placeholder={"Select"} />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>Employment Status</AppText>
            <View style={styles.picker}>
              <AppPicker items={employementStatus} placeholder={"Select"} />
            </View>
          </View>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="incomeAmount"
            placeholder="Monthly Gross Income (Include for spouse if married)"
            textContentType="none"
          />

          <View>
            <AppText style={styles.text}>Have you bought or rented a BHC house before?</AppText>
            <View style={styles.picker}>
              <AppPicker items={ownBHCHouses} placeholder={"Select"} />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>What is your preferred house type?</AppText>
            <View style={styles.picker}>
              <AppPicker items={preferedHouse} placeholder={"Select"} />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>What is your preferred number of bedrooms?</AppText>
            <View style={styles.picker}>
              <AppPicker items={bedrooms} placeholder={"Select"} />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>Date Property Required</AppText>
            <AppDatePicker
              onChange={handleDateChange}
              initialDate={selectedDate}
            />
          </View>

          {/* TODO: Save data to a database */}
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
    text: {
        color: colors.lightTextColor,
    },

  picker: {
    borderWidth: 1,
    borderColor: colors.inputBorderColor,
    borderRadius: 20,
    marginBottom: 10,
  },
});

export default BuyApplication;
