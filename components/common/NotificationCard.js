import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NotificationCard = ({ iconName, iconBgColor, addStyle }) => {
  return (
    <View className={`px-5 first:pt-5 ${addStyle}`}>
      <TouchableOpacity className="bg-white space-x-3 mb-5 items-center flex-row shadow-gray-500 rounded-2xl w-full p-4">
        <View
          className={`rounded-full ${iconBgColor} w-10 h-10 p-2 items-center justify-center`}
        >
          <MaterialCommunityIcons name={iconName} size={24} color="white" />
        </View>
        <View>
          <Text className="font-bold text-gray-500 text-lg">
            Schedule update
          </Text>
          <Text className="font-bold text-gray-400 text-sm">
            Address and time of the pick up
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NotificationCard;
