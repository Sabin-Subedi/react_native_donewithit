import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import expoPushTokensAPI from "../api/expoPushTokens";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { Feather } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import navigation from "./rootNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerFOrPushNotifications();

    Notifications.addListener((notifications) => {
      navigation.navigate("Account");
    });
  }, []);

  const registerFOrPushNotifications = async () => {
    try {
      const token = await Notifications.getExpoPushTokenAsync();

      expoPushTokensAPI.register(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Listings"
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="menu" size={size} color={color} />
          ),
        }}
        component={FeedNavigator}
      />
      <Tab.Screen
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
          tabBarIcon: ({ size, color }) => (
            <Feather name="plus" size={size} color={color} />
          ),
        })}
        name="ListingEdit"
        component={ListingEditScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
        name="Accounts"
        component={AccountNavigator}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
