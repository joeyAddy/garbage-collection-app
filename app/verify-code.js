import {
  View,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const VerifyCode = () => {
  const router = useRouter();
  const inputRefs = Array.from({ length: 4 }, () => useRef(null));
  const [otp, setOtp] = useState(Array(4).fill(""));

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;

    if (index < 4 - 1 && text) {
      inputRefs[index + 1].current.focus();
    }
    const fullOtp = newOtp.join(""); // Convert array to integer
    setOtp(fullOtp);
  };
  return (
    <SafeAreaView className="flex-1 bg-white px-4 justify-between">
      <KeyboardAvoidingView
        className="flex-1 justify-between"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={500} // Adjust offset as needed
      >
        <View>
          <View className="flex-row items-center justify-center space-x-1 my-5">
            <MaterialCommunityIcons
              name="dump-truck"
              size={40}
              color="#4aaa80"
            />
            <Text className="text-3xl text-gray-500 font-bold">KADKEEP</Text>
          </View>
          <View className="items-center">
            <Text className="text-gray-500 text-2xl font-bold text-center">
              Enter verification code
            </Text>
            <Text className="text-gray-500 max-w-[90%] mt-2.5 text-center leading-6">
              We have sent a code to{" "}
              <Text className="font-bold text-gray-700">your@email.com</Text>
            </Text>
          </View>
          <View className="flex-row space-x-3 self-center mt-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <TextInput
                key={index}
                ref={inputRefs[index]}
                className="w-16 h-12 border bod rounded-2xl text-center text-lg"
                keyboardType="number-pad"
                maxLength={1}
                secureTextEntry
                onChangeText={(text) => handleOtpChange(text, index)}
                value={otp[index]}
              />
            ))}
          </View>
        </View>
        <View className="py-8">
          <TouchableOpacity
            onPress={() => {
              router.push("/reset-password");
            }}
            className={`rounded-2xl bg-green-400 py-3 mb-3 items-center ${
              otp.length < 4 && "bg-gray-200"
            }`}
          >
            <Text className="font-bold text-lg text-gray-500">Verify</Text>
          </TouchableOpacity>
          <Text className="text-gray-500 text-center">
            Didn't recieve any code?{" "}
            <Text className="font-bold underline">Resend Code</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyCode;
