import { View, Text, TouchableOpacity } from "react-native";

const ScheduleCard = () => {
  return (
    <TouchableOpacity className="w-auto mx-5 space-y-3 rounded-2xl border border-solid  border-green-400 mb-5 p-5">
      <View className="bg-red-600 w-20 items-center py-1 rounded-2xl">
        <Text className="font-bold text-white text-lg">Urgent</Text>
      </View>
      <View className="items-start">
        <Text className="text-gray-600 text-xl font-extrabold text-center">
          Thursday,
        </Text>
        <Text className="text-gray-600 text-xl font-bold uppercase text-center">
          24 January, 2023, 2PM
        </Text>
      </View>
      <View className="flex-1">
        <View className="flex-row items-center">
          <Text className="text-gray-400 text-sm font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            voluptatem velit exercitationem,
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ScheduleCard;
