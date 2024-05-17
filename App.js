import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import RNPickerSelect from "react-native-picker-select";
import CustomDropdown from "./components/CustomDropdown";

const vegetables = [
  { label: "Potato-$5", value: 5 },
  { label: "Carrot-$8", value: 8 },
  { label: "Broccoli-$5", value: 5 },
  { label: "Cauliflower-$7", value: 7 },
  { label: "Kale-$9", value: 9 },
];

const fruits = [
  { label: "Orange-$11", value: 11 },
  { label: "Blueberry-$12", value: 12 },
  { label: "Apple-$11", value: 11 },
  { label: "Banana-$10", value: 10 },
  { label: "Grapes-$13", value: 13 },
];

const quantities = [
  {
    label: "1",
    value: 1,
  },
  {
    label: "2",
    value: 2,
  },
  {
    label: "3",
    value: 3,
  },
  {
    label: "4",
    value: 4,
  },
  {
    label: "5",
    value: 5,
  },
  {
    label: "6",
    value: 6,
  },
  {
    label: "7",
    value: 7,
  },
  {
    label: "8",
    value: 8,
  },
  {
    label: "9",
    value: 9,
  },
  {
    label: "10",
    value: 10,
  },
];

const App = () => {
  const [selectedVegetable, setSelectedVegetable] = useState("");
  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedVegetableQuantity, setSelectedVegetableQuantity] = useState(1);
  const [selectedFruitQuantity, setSelectedFruitQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCalculate = () => {
    const vegetablePrice = selectedVegetable
      ? selectedVegetable * selectedVegetableQuantity
      : 0;
    const fruitPrice = selectedFruit
      ? selectedFruit * selectedFruitQuantity
      : 0;
    const totalPrice = vegetablePrice + fruitPrice;
    setTotalPrice(totalPrice);
  };

  console.log(selectedFruit);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView className="flex-1 relative">
        <View className="px-4">
          <Text>{selectedVegetable.label}</Text>
          {/* heading text  */}
          <View>
            <Text className="text-xl font-semibold">
              Welcome to POGS Online Shopping!
            </Text>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              className="w-full h-32 object-cover"
            />
          </View>
          {/* vegetables  */}
          <View className="mt-10">
            <View className="">
              <Text className="text-center text-lg font-bold">
                Select Vegetable:
              </Text>
              <CustomDropdown
                items={vegetables}
                setSelectedItem={setSelectedVegetable}
                placeholder="Select Vegetable..."
              />
            </View>
            <View className="mt-5">
              <Text className="text-center text-lg font-bold">
                Select Quantity of Vegetable:
              </Text>
              <CustomDropdown
                items={[1, 2, 3, 4, 5].map((item) => {
                  return {
                    label: `${item}`,
                    value: item,
                  };
                })}
                setSelectedItem={setSelectedVegetableQuantity}
                placeholder="Select Vegetable Quantity..."
              />
            </View>
          </View>
          {/* Fruits  */}
          <View className="mt-5">
            <View>
              <Text className="text-center text-lg font-bold">
                Select Fruit:
              </Text>
              <CustomDropdown
                items={fruits}
                setSelectedItem={setSelectedFruit}
                placeholder="Select Fruits..."
              />
            </View>
            <View className="mt-5">
              <Text className="text-center text-lg font-bold">
                Select Quantity of Fruit:
              </Text>
              <CustomDropdown
                items={[1, 2, 3, 4, 5].map((item) => {
                  return {
                    label: `${item}`,
                    value: item,
                  };
                })}
                setSelectedItem={setSelectedFruitQuantity}
                placeholder="Select Fruits Quantity..."
              />
            </View>
          </View>
          <Pressable
            className="bg-blue-500 w-28 rounded py-1 mx-auto my-5"
            onPress={handleCalculate}
          >
            <Text className="text-white text-center text-lg">Calculate</Text>
          </Pressable>
          <Text className="text-lg font-bold">
            Total Cost of Order: ${totalPrice}
          </Text>
        </View>
        <View className="px-4 mt-auto absolute -bottom-40 w-full left-0">
          <Text className="text-center">App Developed by:</Text>
          <Text className="text-center">
            Susan Ghimire(48091944), Hayden Bonitz(47215569), Baxter
            Kemp(47734175) and Ayush Sharma(47763574)
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  select: {
    backgroundColor: "red,",
    borderColor: "black",
    border: "1px solid black",
  },
});
