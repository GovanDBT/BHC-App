import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { Platform, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import colors from "../config/colors";

const AppDatePicker = ({ onChange, initialDate }) => {
  const [date, setDate] = useState(initialDate || new Date());
  const [show, setShow] = useState(false);

  const onChangeHandler = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    onChange(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{moment(date).format("YYYY-MM-DD")}</Text>
      </View>
      {show && (
        <View style={styles.date}>
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeHandler}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginVertical: 5,
    backgroundColor: colors.primaryTransparentx2,
    borderColor: colors.primaryTransparent,
    borderWidth: 1, 
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.lightTextColor, 
    fontSize: 16,
  },
  date: {
    borderWidth: 1,
    borderColor: colors.primary, 
    borderRadius: 15,
    backgroundColor: colors.white,
  },
});

export default AppDatePicker;
