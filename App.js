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
      <ScrollView style={styles.scrollView}>
        <View style={styles.screenPadding}>
          <Text>{selectedVegetable.label}</Text>
          {/* heading text  */}
          <View>
            <Text style={styles.header}>Welcome to POGS Online Shopping!</Text>
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              // className="h-32"
              style={styles.image}
            />
          </View>
          {/* vegetables  */}
          <View
            style={{
              marginTop: 40,
            }}
          >
            <View className="">
              <Text style={styles.label}>Select Vegetable:</Text>
              <CustomDropdown
                items={vegetables}
                setSelectedItem={setSelectedVegetable}
                placeholder="Select Vegetable..."
              />
            </View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text style={styles.label}>Select Quantity of Vegetable:</Text>
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
          <View
            style={{
              marginTop: 20,
            }}
          >
            <View>
              <Text style={styles.label}>Select Fruit:</Text>
              <CustomDropdown
                items={fruits}
                setSelectedItem={setSelectedFruit}
                placeholder="Select Fruits..."
              />
            </View>
            <View
              style={{
                marginTop: 20,
              }}
            >
              <Text style={styles.label}>Select Quantity of Fruit:</Text>
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
          <Pressable style={styles.button} onPress={handleCalculate}>
            <Text style={styles.buttonText}>Calculate</Text>
          </Pressable>
          <Text style={styles.orderCost}>
            Total Cost of Order: ${totalPrice}
          </Text>
        </View>
        <View style={{ ...styles.screenPadding, ...styles.members }}>
          <Text style={styles.textCenter}>App Developed by:</Text>
          <Text style={styles.textCenter}>
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
  members: {
    position: "absolute",
    bottom: -150,
    width: "100%",
    left: 0,
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  orderCost: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
  },
  button: {
    backgroundColor: "#3b83f6",
    width: 112,
    borderRadius: 4,
    paddingTop: 4,
    paddingBottom: 4,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "center",
    color: "white",
  },
  label: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 28,
    fontWeight: "700",
  },
  screenPadding: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  scrollView: {
    flex: `1 1 0%`,
    position: `relative`,
  },
  select: {
    backgroundColor: "red",
    borderColor: "black",
    border: "1px solid black",
  },
  header: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
  },
  image: {
    height: 128,
  },
});
