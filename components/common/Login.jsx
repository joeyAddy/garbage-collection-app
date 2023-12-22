import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <View className="space-y-3">
        <TouchableOpacity className="bg-white flex-row items-center justify-center py-3 rounded-2xl space-x-1">
          <MaterialCommunityIcons name="gmail" size={24} color="red" />
          <Text>Login with google</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white flex-row items-center justify-center py-3 rounded-2xl space-x-1">
          <MaterialCommunityIcons name="facebook" size={24} color="blue" />
          <Text>Login with facebook</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-center my-7">
        <View className="flex-1 h-px bg-gray-500" />
        <Text className="px-2 text-gray-500">or continue with email</Text>
        <View className="flex-1 h-px bg-gray-500" />
      </View>
      <View className="space-y-3">
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
        <TouchableOpacity
          onPress={() => {
            router.push("/forgot-password");
          }}
          className="mb-5"
        >
          <Text className="text-gray-500">Forgot password?</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity
            onPress={() => {
              router.push("home");
            }}
            className="rounded-2xl bg-green-400 py-3 items-center"
          >
            <Text className="font-bold text-lg  text-white">Login</Text>
          </TouchableOpacity>
          <View className="my-3 space-x-1 flex-row flex-wrap justify-center items-center">
            <Text className="text-gray-500 text-center">
              By signing in you agree to our
            </Text>
            <Pressable>
              <Text className="text-gray-800 underline underline-offset-2">
                Terms of service
              </Text>
            </Pressable>
            <Text className="fill-gray-500">and</Text>
            <Pressable>
              <Text className="text-gray-800 underline underline-offset-2">
                Policies
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
