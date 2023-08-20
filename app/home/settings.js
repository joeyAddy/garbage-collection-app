import { Link, useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Settings = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="h-full">
      <View className="w-full flex-row mt-4 mb-3 px-5 items-center">
        <View>
          <Ionicons
            onPress={() => {
              router.push("/home");
            }}
            name="arrow-back"
            size={30}
            color="gray"
          />
        </View>
        <View className="flex-1 items-center">
          <Text className="text-center font-bold text-gray-500 text-2xl">
            Settings
          </Text>
        </View>
      </View>
      <View className="mt-5 mx-5 space-y-5">
        <View className="">
          <TouchableOpacity
            onPress={() => {
              router.push("/profile");
            }}
            className="bg-white space-x-3 items-center flex-row shadow-gray-500 rounded-2xl w-full p-2"
          >
            <View
              className={`rounded-full w-20 h-20 items-center justify-center`}
            >
              <Ionicons
                onPress={() => {}}
                name="person-circle"
                size={65}
                color="gray"
              />
            </View>
            <View className="flex-1">
              <Text className="font-bold text-gray-500 text-lg">User name</Text>
              <Text className="font-bold text-gray-400 text-sm">
                Email@email.com
              </Text>
            </View>
            <Link href="/profile" className="items-center justify-center">
              <Ionicons name="chevron-forward" size={40} color="gray" />
            </Link>
          </TouchableOpacity>
        </View>
        <View className="bg-white rounded-2xl p-6 space-y-6">
          <View className="flex-row space-x-5 items-center">
            <View className="items-center justify-center bg-green-400 rounded-2xl p-2">
              <Ionicons
                onPress={() => {}}
                name="notifications"
                size={24}
                color="white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl">Notifications</Text>
            </View>
            <View className="items-center justify-center -mr-2">
              <Ionicons
                onPress={() => {
                  router.push("/home/notifications");
                }}
                name="chevron-forward"
                size={40}
                color="gray"
              />
            </View>
          </View>
          <View className="flex-row space-x-5 items-center">
            <View className="items-center justify-center bg-yellow-400 rounded-2xl p-2">
              <MaterialCommunityIcons
                name="shield-account"
                size={24}
                color="white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl">Security</Text>
            </View>
            <View className="items-center justify-center -mr-2">
              <Ionicons
                onPress={() => {
                  router.push("/profile");
                }}
                name="chevron-forward"
                size={40}
                color="gray"
              />
            </View>
          </View>
          <View className="flex-row space-x-5 items-center">
            <View className="items-center justify-center bg-red-400 rounded-2xl p-2">
              <Ionicons
                onPress={() => {}}
                name="lock-closed"
                size={24}
                color="white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl">Privacy</Text>
            </View>
            <View className="items-center justify-center -mr-2">
              <Ionicons
                onPress={() => {
                  router.push("/profile");
                }}
                name="chevron-forward"
                size={40}
                color="gray"
              />
            </View>
          </View>
        </View>
        <View className="bg-white rounded-2xl p-6 space-y-6">
          <View
            onPress={() => {
              router.push("/profile");
            }}
            className="flex-row space-x-5 items-center"
          >
            <View className="items-center justify-center bg-green-400 rounded-2xl p-2">
              <Ionicons
                onPress={() => {}}
                name="person"
                size={24}
                color="white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl">Account</Text>
            </View>
            <View className="items-center justify-center -mr-2">
              <Ionicons
                onPress={() => {
                  router.push("/profile");
                }}
                name="chevron-forward"
                size={40}
                color="gray"
              />
            </View>
          </View>
          <View className="flex-row space-x-5 items-center">
            <View className="items-center justify-center bg-gray-400 rounded-2xl p-2">
              <Ionicons
                onPress={() => {}}
                name="help"
                size={24}
                color="white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl">Help</Text>
            </View>
            <View className="items-center justify-center -mr-2">
              <Ionicons
                onPress={() => {
                  router.push("/profile");
                }}
                name="chevron-forward"
                size={40}
                color="gray"
              />
            </View>
          </View>
          <View className="flex-row space-x-5 items-center">
            <View className="items-center justify-center bg-gray-900 rounded-2xl p-2">
              <MaterialCommunityIcons
                name="information-variant"
                size={24}
                color="white"
              />
            </View>
            <View className="flex-1">
              <Text className="text-xl">About</Text>
            </View>
            <View className="items-center justify-center -mr-2">
              <Ionicons
                onPress={() => {
                  router.push("/profile");
                }}
                name="chevron-forward"
                size={40}
                color="gray"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
