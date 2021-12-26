import { Feather } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Feather name="x" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Feather name="trash" color={colors.white} size={35} />
      </View>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default ViewImageScreen;
