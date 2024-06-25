import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.text}> 
        <AppText style={styles.textProblems}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.inputBorderColor,
    // backgroundColor: colors.primary,
  },
  textProblems: {
    color: colors.textColor,
  }
});

export default PickerItem;
