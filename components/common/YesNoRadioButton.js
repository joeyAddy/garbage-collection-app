import React, { useState } from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

function YesNoRadioButton({ selected, onSelect }) {
  return (
    <View className="flex-row">
      <View className="flex-row items-center">
        <RadioButton
          value="yes"
          status={selected === "yes" ? "checked" : "unchecked"}
          onPress={() => onSelect("yes")}
        />
        <Text className="text-gray-500">Yes</Text>
      </View>
      <View className="flex-row items-center">
        <RadioButton
          value="no"
          status={selected === "no" ? "checked" : "unchecked"}
          onPress={() => onSelect("no")}
        />
        <Text className="text-gray-500">No</Text>
      </View>
    </View>
  );
}

export default YesNoRadioButton;
