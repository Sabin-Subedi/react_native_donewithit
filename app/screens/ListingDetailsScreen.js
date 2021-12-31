import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem/";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnailUrl }}
        style={styles.image}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Sabin Subedi"
          subTitle="5 Listings"
          style={{ marginVertical: 40 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: "bold",
    marginVertical: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
