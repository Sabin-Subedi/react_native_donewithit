import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import listingApi from "../api/listings";
import AppButton from "../components/AppButton";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";
import AppText from "../components/AppText";

function ListingScreen({ navigation }) {
  const {
    error,
    isLoading,
    data: listings,
    request: loadListings,
  } = useApi(listingApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={isLoading} />

      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>
              Couldn't retrieve the listings. Please try again !
            </AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={listings}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              price={"$" + item.price}
              image={item.images[0].url}
              thumbnailUrl={item.images[0].thumbnailUrl}
              onPress={() => navigation.navigate("ListingsDetails", item)}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
