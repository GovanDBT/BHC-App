import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

import { Icon } from "react-native-vector-icons/Icon";

function RadioButton({ label, value, selected, onSelect }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onSelect(value)}>
      <AppText style={styles.label}>{label}</AppText>
      <View style={styles.radioButton}>
        {selected ? (
          <Icon name="radio-button-checked" size={24} color={"#007AFF"} />
        ) : (
          <Icon name="radio-button-unchecked" size={24} color={"#007AFF"} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  radioButton: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
});

export default RadioButton;
