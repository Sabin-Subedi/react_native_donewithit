import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    position: "absolute",
    top: Constants.statusBarHeight,
    zIndex: 10,
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default OfflineNotice;
