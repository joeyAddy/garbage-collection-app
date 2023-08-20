import { View, Text, TouchableOpacity, TextInput, Switch } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import { useState } from "react";

const SignUp = () => {
  const [checked, setChecked] = useState(false);
  const [isCollector, setIsCollector] = useState(false);

  const toggleSwitch = () => {
    setIsCollector((previousState) => !previousState);
  };
  return (
    <View>
      <View className="space-y-3">
        {/* <View
          className={`flex-row self-center items-center space-x-2 bg-gray-500 rounded-full pl-1 pr-4 ${
            !isCollector && "pl-3"
          }`}
        >
          <Switch
            trackColor={{ false: "white", true: "white" }}
            thumbColor={isCollector ? "green" : "#f87171"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isCollector}
          />
          <Text className="text-white font-bold">
            {isCollector ? "Collector" : "Resident"}
          </Text>
        </View> */}
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <Ionicons name="person" size={24} color="grey" />
          <TextInput
            className="flex-1"
            placeholder="Enter your name"
            onChangeText={() => {}}
            autoComplete="name"
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <MaterialCommunityIcons name="email" size={24} color="grey" />
          <TextInput
            className="flex-1"
            placeholder="Enter your email"
            onChangeText={() => {}}
            autoComplete="email"
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <MaterialCommunityIcons name="shield-key" size={24} color="grey" />
          <TextInput
            className="flex-1"
            placeholder="Enter your password"
            onChangeText={() => {}}
            secureTextEntry
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <MaterialCommunityIcons name="shield-key" size={24} color="grey" />
          <TextInput
            className="flex-1"
            placeholder="Confirm your password"
            onChangeText={() => {}}
            secureTextEntry
          />
        </View>
        <View className="pt-10">
          <View className="flex-row pt-2 pb-3">
            <Checkbox
              color="gray"
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text className="text-gray-500 pt-1">
              By agreeing to out terms and conditions you are entering into a
              legal bind and contract witht he service provider
            </Text>
          </View>
          <View>
            <TouchableOpacity className="rounded-2xl bg-green-400 py-3 items-center">
              <Text className="font-bold text-lg text-gray-500">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
