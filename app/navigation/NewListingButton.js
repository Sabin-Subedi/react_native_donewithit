import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Feather name="plus" size={40} color={colors.white} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    borderColor: colors.white,
    borderWidth: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
