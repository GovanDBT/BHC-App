import React, { useState } from "react";
import Screen from "./Screen";
import { ScrollView, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import colors from "../config/colors";
import AppRadioButton from "../components/AppRadioButton";



function RentApplication(props) {
    const [selectedValue, setSelectedValue] = useState(null);
    
    const handleSelect = (value) => {
        setSelectedValue(value);
    }
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <AppText style={styles.paragaphText}>
            We hope we can assist you in finding your new home. We ask that you
            provide your details so that we can contact you, should a property
            suiting your requirements become available. Please note that we will
            only use the information you have provided to us to contact you
            should a rental property become available.
          </AppText>
        </View>

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
            name="address"
            placeholder="Current Address"
            textContentType=" "
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="telephone"
            placeholder="Telephone"
            textContentType=" "
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="mobileNo"
            placeholder="Mobile No."
            textContentType="none"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="email"
            placeholder="Email"
            textContentType="email"
          />

          <View style={styles.radioButtons}>
            <AppText style={styles.paragaphText}>Are you currently renting?</AppText>

            {/* Radio Buttons */}
            <AppRadioButton
            label={"Yes"}
            value={"Yes"}
            selected={selectedValue === "Yes"}
            onSelect={handleSelect}
            />
            
            <AppRadioButton
            label={"No"}
            value={"No"}
            selected={selectedValue === "No"}
            onSelect={handleSelect}
            />
          </View>

          <AppText style={styles.paragaphText}>If Yes, when is the lease expiring?</AppText>

          {/* Date Pickers */}
          <View style={styles.date}></View>

          <AppText style={styles.paragaphText}>Date Property Required?</AppText>

          {/* Date Pickers */}
          <View style={styles.date}></View>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="amount"
            placeholder="Maximum amount of rent you wish to pay?"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="noOfResidents"
            placeholder="How many people will reside at the premise?"
            textContentType="none"
          />

          <AppText style={styles.paragaphText}>Type of Property</AppText>

          {/* Radio Buttons */}
          <View style={styles.radioButtons}>

            <AppRadioButton
            label={"House"}
            value={"House"}
            selected={selectedValue === "House"}
            onSelect={handleSelect}
            />
            
            <AppRadioButton
            label={"TownHouse"}
            value={"TownHouse"}
            selected={selectedValue === "TownHouse"}
            onSelect={handleSelect}
            />
            
            <AppRadioButton
            label={"Flat"}
            value={"Flat"}
            selected={selectedValue === "Flat"}
            onSelect={handleSelect}
            />

          </View>

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="noOfBedrooms"
            placeholder="Number of Bedrooms"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="noOfBathrooms"
            placeholder="Number of Bathrooms"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="noOfGarages"
            placeholder="Number of Garages"
            textContentType="none"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            name="noOfCarpots"
            placeholder="Number of Carpots"
            textContentType="none"
          />

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
    paragaphText: {
        color: colors.lightTextColor,

    },

    radioButtons: {
        flexDirection: "row",
        justifyContent:"space-around"

    },
})

export default RentApplication;
