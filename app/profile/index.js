import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import avatar from "../../assets/images/rider.png";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="relative h-32 w-32 bg-white items-center justify-center border-2 border-green-400 self-center mt-10 rounded-full">
        {/* <Image
          style={{ resizeMode: "contain" }}
          Source={avatar}
          alt="avatar"
          className="h-full w-full rounded-full"
        /> */}
        <Ionicons name="person" size={80} color="grey" />

        <View className="absolute top-2/3 bg-white p-1 rounded-full border border-green-400 left-3/4">
          <MaterialCommunityIcons name="image-edit" size={20} color="gray" />
        </View>
      </View>
      <View className="self-center my-6">
        <Text className="text-2xl font-bold text-gray-600">John Doe</Text>
      </View>
      <View className="px-5 space-y-5">
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <Ionicons name="person" size={24} color="grey" />
          <TextInput
            className="flex-1 text-gray-500"
            value="John Doe"
            placeholder="Enter your name"
            onChangeText={() => {}}
            autoComplete="name"
          />
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="gray"
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <MaterialCommunityIcons name="email" size={24} color="grey" />
          <TextInput
            className="flex-1 text-gray-500"
            value="email@gmail.com"
            placeholder="Enter your email"
            onChangeText={() => {}}
            autoComplete="email"
          />
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="gray"
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <MaterialCommunityIcons name="shield-key" size={24} color="grey" />
          <TextInput
            className="flex-1 text-gray-500"
            value="password"
            placeholder="Enter your password"
            onChangeText={() => {}}
            secureTextEntry
          />
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="gray"
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <Ionicons name="md-location-sharp" size={24} color="gray" />
          <TextInput
            className="flex-1 text-gray-500"
            value="Kaduna, Kaduna"
            placeholder="Enter your location"
            onChangeText={() => {}}
          />
          <MaterialCommunityIcons
            name="square-edit-outline"
            size={24}
            color="gray"
          />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <FontAwesome5 name="headset" size={24} color="gray" />
          <Text className="flex-1 text-gray-500">Support</Text>
          <Ionicons name="chevron-forward" size={24} color="gray" />
        </View>
        <View className="flex-row space-x-2 items-center px-3 py-3 bg-white rounded-2xl">
          <MaterialCommunityIcons name="logout" size={24} color="gray" />
          <Text className="flex-1 text-gray-500">Log Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
