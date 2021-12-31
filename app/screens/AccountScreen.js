import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AuthConxtext from "../auth/context";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItem/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    title: "My Listings",

    icon: {
      name: "list",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    targetScreen: "Messages",
    icon: {
      name: "mail",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen({ navigation }) {
  const { user, handleLogout } = useAuth();
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() =>
                item.targetScreen && navigation.navigate(item.targetScreen)
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        onPress={handleLogout}
        IconComponent={<Icon name="log-out" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
