import { useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Provider, Portal } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

const ScheduleCalendar = () => {
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  const formattedDate = date
    ? date.toLocaleString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      })
    : "Select Date and Time";

  return (
    <Provider>
      <View className="flex-1 bg-white p-4">
        <TouchableOpacity
          className="my-4 bg-green-400 py-3 px-4 rounded-2xl"
          onPress={() => setOpen(true)}
        >
          <Text className="text-lg font-semibold">Select Date and Time</Text>
        </TouchableOpacity>

        {date && (
          <View className="mt-4">
            <Text className="text-lg font-semibold">
              Selected Date and Time:
            </Text>
            <Text className="text-gray-600 mt-2">{formattedDate}</Text>
          </View>
        )}

        <Portal>
          <DatePickerModal
            locale="en"
            mode="single"
            visible={open}
            onDismiss={onDismissSingle}
            date={date}
            onConfirm={onConfirmSingle}
          />
        </Portal>
      </View>
    </Provider>
  );
};

export default ScheduleCalendar;
