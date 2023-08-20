import { View, Text, StatusBar, ScrollView, Image, Alert } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import ScheduleCard from "../../components/ScheduleCard";
import { useEffect, useState } from "react";
import getLocation from "../../utils/getLocation";
import riderIcon from "../../assets/images/origin.png";

const Home = () => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    (async () => {
      const { latitude, longitude } = await getLocation();
      if (latitude && longitude) {
        setLocation({ latitude, longitude });
      } else {
        Alert.alert("The app needs access to your location to work properly");
        const { latitude, longitude } = await getLocation();
        if (latitude && longitude) {
          setLocation({ latitude, longitude });
        } else {
          Alert.alert("Some features might not work properly.");
        }
      }
    })();
  }, []);
  return (
    <View className="flex-1 relative">
      <StatusBar backgroundColor="#b3e6ff" barStyle="light-content" />
      <View className="w-screen h-1/2 relative bg-transparent">
        <View className="flex-row space-x-4 p-1 bg-white z-50 absolute top-12 mx-5 right-0 left-0 rounded-full shadow-xl shadow-black items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name="person-circle" size={50} color="gray" />
            <View className="flex-row items-center">
              <Ionicons name="location" size={35} color="gray" />
              <View>
                <Text className="font-bold text-gray-600">City</Text>
                <Text className="font-normal text-sm text-gray-400">
                  full address
                </Text>
              </View>
            </View>
          </View>
          <View className="pr-2">
            <Ionicons name="md-chevron-down" size={24} color="gray" />
          </View>
        </View>
        <View>
          <StatusBar hidden={true} />
          {location && (
            <MapView
              provider={PROVIDER_GOOGLE}
              className=" h-full w-full"
              initialRegion={{
                latitude: location.latitude,
                longitude: location.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
              }}
            >
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title="Rider"
                description={"Rider location"}
              >
                <Image
                  source={riderIcon}
                  style={{
                    resizeMode: "contain",
                    height: 50,
                    width: 50,
                  }}
                />
              </Marker>
            </MapView>
          )}
        </View>
      </View>
      <View className="flex-1 h-[52%] w-screen absolute bottom-0 rounded-tr-2xl rounded-tl-2xl bg-white">
        <View className="bg-none h-5 w-full" />
        <ScrollView>
          <View
            className={`flex-1 flex-row items-center mx-4 rounded-tr-xl rounded-tl-xl px-2 mb-3`}
          >
            <View className="pr-2">
              <Ionicons name="calendar" size={24} color="#4ade80" />
            </View>
            <Text className="text-lg font-bold text-gray-600 mb-1">
              Next Collection
            </Text>
          </View>
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
