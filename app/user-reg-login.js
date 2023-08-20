import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "../components/common/Login";
import SignUp from "../components/common/SignUp";
import { Platform } from "react-native";

const UserRegAndLogin = () => {
  const [activeSection, setActiveSection] = useState("login");
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={500} // Adjust offset as needed
      >
        <View className="flex-row items-center justify-center space-x-1 my-5">
          <MaterialCommunityIcons name="dump-truck" size={40} color="#4aaa80" />
          <Text className="text-3xl text-gray-500 font-bold">KADKEEP</Text>
        </View>
        <View className="items-center">
          <Text className="text-gray-500 text-2xl font-bold text-center">
            Welcome to KADKEEP
          </Text>
          <Text className="text-gray-500 max-w-[70%] mt-2.5 text-center leading-6">
            Sign up or login below to access the apps benefits
          </Text>
        </View>
        <View className="mt-5 flex-row w-full">
          <TouchableOpacity
            onPress={() => {
              setActiveSection("login");
            }}
            className={`items-center py-3 w-1/2 ${
              activeSection === "login" && "border-b-4 border-gray-500"
            }`}
          >
            <Text
              className={`font-semibold text-lg text-gray-500 ${
                activeSection === "login" && "font-extrabold"
              }`}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setActiveSection("signup");
            }}
            className={`items-center py-3 w-1/2 duration-300 ${
              activeSection === "signup" && "border-b-4 border-gray-500"
            }`}
          >
            <Text
              className={`font-semibold text-lg text-gray-500 ${
                activeSection === "signup" && "font-extrabold"
              }`}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          className="flex-1 bg-gray-100"
          showsVerticalScrollIndicator={false}
        >
          <View className="py-6 px-4">
            {activeSection === "login" ? <Login /> : <SignUp />}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UserRegAndLogin;
