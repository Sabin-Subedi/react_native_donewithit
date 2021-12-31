import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function AppActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "white",
    opacity: 0.8,
  },
});

export default AppActivityIndicator;
