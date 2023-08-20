import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Profile",
        headerShadowVisible: false,
        headerTintColor: "gray",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "transparent",
        },
      }}
    />
  );
};

export default _layout;
