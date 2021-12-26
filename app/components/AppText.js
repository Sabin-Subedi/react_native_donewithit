import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import defaultStyles from "../config/styles";

function AppText({ children, style, ...props }) {
  return (
    <Text style={[defaultStyles.text, style]} {...props}>
      {children}
    </Text>
  );
}

export default AppText;
