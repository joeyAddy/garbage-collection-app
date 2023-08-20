import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import NotificationCard from "../../components/common/NotificationCard";
import { ScrollView } from "react-native";
const Notifications = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1">
      <View className="w-full flex-row mt-4 mb-2 px-5 items-center">
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
            Notifications
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NotificationCard
          addStyle="pt-5"
          iconBgColor="bg-green-400"
          iconName="dump-truck"
        />
        <NotificationCard iconBgColor="bg-yellow-400" iconName="dump-truck" />
        <NotificationCard iconBgColor="bg-red-400" iconName="dump-truck" />
        <NotificationCard iconBgColor="bg-green-400" iconName="dump-truck" />
        <NotificationCard iconBgColor="bg-green-400" iconName="dump-truck" />
        <NotificationCard iconBgColor="bg-red-400" iconName="dump-truck" />
        <NotificationCard iconBgColor="bg-yellow-400" iconName="dump-truck" />
        <NotificationCard iconBgColor="bg-red-400" iconName="dump-truck" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;
