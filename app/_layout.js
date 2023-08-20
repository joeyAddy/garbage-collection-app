import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

const _layout = () => {
  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);

  useEffect(async () => {
    const appData = await AsyncStorage.get("isAppFirstLaunch");
    if (appData == null) {
      setIsAppFirstLaunch(true);
    } else {
      setIsAppFirstLaunch(false);
    }
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default _layout;
