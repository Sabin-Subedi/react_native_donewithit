import React from "react";
import { Image, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { Formik } from "formik";
import * as yup from "yup";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/Forms";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(value) => console.log(value.email)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Email"
          icon="mail"
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyBoardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          placeholder="Password"
          icon="lock"
          secureTextEntry
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          textContentType="password"
        />

        <SubmitButton title="Login" color={colors.danger} />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  screen: {
    paddingHorizontal: 20,
  },
});

export default LoginScreen;
