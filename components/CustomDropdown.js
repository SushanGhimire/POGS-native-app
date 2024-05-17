import React from "react";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const CustomDropdown = ({ items, setSelectedItem, placeholder }) => {
  return (
    <View>
      <RNPickerSelect
        style={{
          ...pickerSelectStyles,
          iconContainer: {
            top: 10,
            right: 12,
          },
        }}
        onValueChange={(value) => setSelectedItem(value)}
        placeholder={{
          label: placeholder,
        }}
        items={items}
        Icon={() => {
          return <Ionicons name="chevron-down" size={24} color="gray" />;
        }}
      />
    </View>
  );
};

export default CustomDropdown;

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
  },
});
