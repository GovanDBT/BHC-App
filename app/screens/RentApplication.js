import React from "react";
import Screen from "./Screen";
import { ScrollView, View } from "react-native";
import AppText from "../components/AppText";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

function RentApplication(props) {
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <AppText>
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

          <View>
            <AppText>Are you currently renting?</AppText>

            {/* Radio Buttons */}
            <AppText>Yes</AppText>
            <AppText>No</AppText>
          </View>

          <AppText>If Yes, when is the lease expiring?</AppText>

          {/* Date Pickers */}
          <View></View>

          <AppText>Date Property Required?</AppText>

          {/* Date Pickers */}
          <View></View>

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

          <AppText>Type of Property</AppText>

          {/* Radio Buttons */}
          <View>
            <AppText>House</AppText>
            <AppText>TownHouse</AppText>
            <AppText>Flat</AppText>
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

export default RentApplication;
