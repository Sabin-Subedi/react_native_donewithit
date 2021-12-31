import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false, presentation: "modal" }}
  >
    <Stack.Screen name="Listing" component={ListingScreen} />
    <Stack.Screen name="ListingsDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
