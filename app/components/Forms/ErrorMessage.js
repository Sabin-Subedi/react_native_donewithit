import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";

function ErrorMessage({ error, visible }) {
  if (!error || visible === false) return null;
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.danger,
  },
});

export default ErrorMessage;
