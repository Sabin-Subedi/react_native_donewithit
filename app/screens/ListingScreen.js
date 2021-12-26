import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const listings = [
  {
    id: "1",
    title: "Red jacket for sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: "2",
    title: "Sofa for sale",
    price: "$100",
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card title={item.title} price={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
