import { Alert, Image, StatusBar, View } from "react-native";
import { FlatList } from "react-native";
import { Dimensions, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import slides from "../constants/slides";
import { useLayoutEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const Onboarding = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const router = useRouter();

  const [isAppFirstLaunch, setIsAppFirstLaunch] = useState(null);

  useLayoutEffect(() => {
    const checkAndSetAppFirstLaunch = async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunch");
      if (appData === null) {
        setIsAppFirstLaunch(true);
        await AsyncStorage.setItem("isAppFirstLaunch", "false");
      } else {
        setIsAppFirstLaunch(false);
      }
    };

    checkAndSetAppFirstLaunch();
  }, []);

  const Slide = ({ item }) => {
    return (
      <View className="items-center w-screen">
        <View className="flex-row items-center space-x-1 mt-5">
          <MaterialCommunityIcons name="dump-truck" size={40} color="#4aaa80" />
          <Text className="text-3xl text-gray-500 font-bold">KADKEEP</Text>
        </View>
        <View className={`h-[60%] w-screen px-3 items-center`}>
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
              // backgroundColor: "#f00",
            }}
          />
        </View>

        <Text className="text-gray-500 text-2xl font-bold text-center">
          {item.title}
        </Text>
        <Text className="text-gray-500 max-w-[70%] mt-2.5 text-center leading-6">
          {item.subtitle}
        </Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View className={`h-[24%] justify-between px-5 pb-5`}>
        <View className="flex-row justify-center mb-3">
          {slides.map((_, index) => (
            <View
              key={index}
              className={`h-[2.5px] bg-gray-500 w-2.5 rounded-[2px] mx-1 ${
                currentSlideIndex === index ? "bg-green-400 w-4" : ""
              }`}
            />
          ))}
        </View>
        <View className="my-5">
          {currentSlideIndex == slides.length - 1 ? (
            <View className="space-y-5 h-full">
              <TouchableOpacity
                onPress={() => {
                  router.replace("/user-reg-login");
                }}
                className="flex-1 h-14 bg-green-400 rounded-2xl items-center justify-center"
              >
                <Text className="font-bold text-white text-base">Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.replace("/user-reg-login");
                }}
                className="flex-1 h-14 bg-transparent border-2 border-gray-500 rounded-2xl items-center justify-center"
              >
                <Text className="font-bold text-gray=500 text-base">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View className="space-y-5 h-full">
              <TouchableOpacity
                onPress={goToNextSlide}
                className="flex-1 h-14 bg-green-400 rounded-2xl items-center justify-center"
              >
                <Text className="font-bold text-white text-base">Next</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={skip}
                className="flex-1 h-14 bg-transparent border-2 border-gray-500 rounded-2xl items-center justify-center"
              >
                <Text className="font-bold text-gray=500 text-base">Skip</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    // Alert.alert(currentIndex.toString());
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };
  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  // useEffect(() => {
  //   if (isAppFirstLaunch === false && isAppFirstLaunch !== null) {
  //     return router.replace("/user-reg-login");
  //   }
  // }, [isAppFirstLaunch]);

  return (
    isAppFirstLaunch !== null && (
      <SafeAreaView className="flex-1 bg-white">
        <StatusBar backgroundColor="#fff" />
        <FlatList
          ref={ref}
          pagingEnabled
          keyExtractor={(item) => item.id}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          contentContainerStyle={{
            height: height * 0.8,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer />
      </SafeAreaView>
    )
  );
};

export default Onboarding;
