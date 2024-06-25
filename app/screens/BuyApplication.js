import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Screen from "./Screen";
import colors from "../config/colors";
import Routes from "../navigation/Routes";
import AppText from "../components/AppText";
import AppPicker from "../components/AppPicker";
import AppDatePicker from "../components/AppDatePicker";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import PropertyDetailsScreen from "./PropertyDetailsScreen";

const ages = [
  { label: "18-21", value: 1 },
  { label: "21-30", value: 2 },
  { label: "30+", value: 3 },
];

const employementStatuses = [
  { label: "Unemployed", value: 1 }, 
  { label: "Student", value: 2 },
  { label: "Employed", value: 3 },
  { label: "Self Employed", value: 4 },
];

const ownBHCHouses = [
  { label: "No", value: 1 },
  { label: "Yes", value: 2 },
];

const preferedHouses = [
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

function BuyApplication() {
  const Property = PropertyDetailsScreen.route;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [bedroom, setBedrooms] = useState(bedrooms[0]);
  const [age, setAges] = useState(ages[0]);
  const [preferedHouse, setPreferedHouse] = useState(preferedHouses[0]);
  const [ownBHCHouse, setownBHCHouses] = useState(ownBHCHouses[0]);
  const [employementStatuse, setEmployementStatuses] = useState(
    employementStatuses[0]
  );

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
              <AppPicker
                selectedItem={age}
                onSelectItem={(age) => setAges(age)}
                items={ages}
                placeholder={"Select"}
              />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>Employment Status</AppText>
            <View style={styles.picker}>
              <AppPicker
                selectedItem={employementStatuse}
                onSelectItem={(employementStatuses) =>
                  setEmployementStatuses(employementStatus)
                }
                items={employementStatuses}
                placeholder={"Select"}
              />
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
            <AppText style={styles.text}>
              Have you bought or rented a BHC house before?
            </AppText>
            <View style={styles.picker}>
              <AppPicker
                selectedItem={ownBHCHouse}
                onSelectItem={(house) => setownBHCHouses(house)}
                items={ownBHCHouses}
                placeholder={"Select"}
              />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>
              What is your preferred house type?
            </AppText>
            <View style={styles.picker}>
              <AppPicker
                selectedItem={preferedHouse}
                onSelectItem={(house) => setPreferedHouse(house)}
                items={preferedHouses}
                placeholder={"Select"}
              />
            </View>
          </View>

          <View>
            <AppText style={styles.text}>
              What is your preferred number of bedrooms?
            </AppText>
            <View style={styles.picker}>
              <AppPicker
                selectedItem={bedroom}
                onSelectItem={(bedroom) => setBedrooms(bedroom)}
                items={bedrooms}
                placeholder={"Select"}
              />
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
