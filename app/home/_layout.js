import { Tabs } from "expo-router/tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIconStyle: {
          backgroundColor: route.name === "index" ? "#0f0" : "#000",
        },
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          if (route.name === "index") {
            iconName = focused ? "md-home" : "md-home-outline";
          } else if (route.name === "stats") {
            iconName = focused ? "md-stats-chart" : "md-stats-chart-outline";
          } else if (route.name === "notifications") {
            iconName = focused ? "notifications" : "notifications-outline";
          } else if (route.name === "settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "complaints") {
            iconName = focused
              ? "chatbox-ellipses"
              : "chatbox-ellipses-outline";
          }
          return (
            <View
              className={`${
                focused &&
                route.name !== "index" &&
                "border-t-[3px] border-green-400 h-full items-center justify-center"
              } ${
                route.name === "index"
                  ? "bg-green-400 rounded-full p-4 -mt-5 border-4 border-green-200 "
                  : ""
              }`}
            >
              <Ionicons
                name={iconName}
                size={size}
                color={`${route.name === "index" ? "white" : "gray"}`}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          backgroundColor: "white",
        },
      })}
    >
      <Tabs.Screen
        name="stats"
        options={{
          href: "home/stats",
        }}
      />
      <Tabs.Screen
        name="complaints"
        options={{
          href: "home/complaints",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: "/",
          // href: {
          //   pathname: "/[user]",
          //   params: {
          //     user: "evanbacon",
          //   },
          // },
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          href: "home/settings",
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          href: "home/notifications",
        }}
      />
    </Tabs>
  );
};

export default _layout;
