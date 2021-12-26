import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

function CategoryPickerItem({ onPress, item }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          IconComponent={MaterialCommunityIcons}
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 16,
  },
});

export default CategoryPickerItem;
