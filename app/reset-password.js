import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useRouter } from "expo-router";

const ForgotPassword = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white px-4 justify-between">
      <View>
        <View className="flex-row items-center justify-center space-x-1 my-5">
          <MaterialCommunityIcons name="dump-truck" size={40} color="#4aaa80" />
          <Text className="text-3xl text-gray-500 font-bold">KADKEEP</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-500 text-2xl font-bold text-center">
            Forgot password
          </Text>
          <Text className="text-gray-500 max-w-[90%] mt-2.5 text-center leading-6">
            The password must be different from before
          </Text>
        </View>
        <View className="space-y-3 mt-8">
          <View className="flex-row space-x-2 items-center px-3 py-3 bg-white border border-solid border-gray-500 rounded-2xl">
            <MaterialCommunityIcons name="shield-key" size={24} color="grey" />
            <TextInput
              className="flex-1"
              placeholder="Enter your new password"
              onChangeText={() => {}}
              secureTextEntry
            />
          </View>
          <View className="flex-row space-x-2 items-center px-3 py-3 bg-white border border-solid border-gray-500 rounded-2xl">
            <MaterialCommunityIcons name="shield-key" size={24} color="grey" />
            <TextInput
              className="flex-1"
              placeholder="Confirm your password"
              onChangeText={() => {}}
              secureTextEntry
            />
          </View>
        </View>
      </View>
      <View className="py-8">
        <TouchableOpacity
          onPress={() => {
            router.push("/verify-code");
          }}
          className="rounded-2xl bg-green-400 py-3 mb-3 items-center"
        >
          <Text className="font-bold text-lg text-gray-500">Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="rounded-2xl bg-white border border-solid border-gray-500 py-3 items-center"
        >
          <Text className="font-bold text-lg text-gray-500">Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
