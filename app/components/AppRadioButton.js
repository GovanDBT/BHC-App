import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import Icon  from "react-native-vector-icons/MaterialIcons";

function AppRadioButton({ label, value, selected, onSelect }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect(value)}>
      <View style={styles.radioButton}>
        {selected ? (
          <Icon name="radio-button-checked" size={24} color={"#007AFF"} />
        ) : (
          <Icon name="radio-button-unchecked" size={24} color={"#007AFF"} />
        )}
      </View>
        <Text style={styles.label}>{label}</Text>
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

export default AppRadioButton;
