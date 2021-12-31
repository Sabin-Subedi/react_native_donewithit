import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import usersApi from "../api/users";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import ErrorMessage from "../components/Forms/ErrorMessage";
import SubmitButton from "../components/Forms/SubmitButton";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import colors from "../config/colors";
import useAuth from "../hooks/useAuth";
import useApi from "../hooks/useApi";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const auth = useAuth();
  const requestApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);

  const handleSubmit = async (userInfo) => {
    try {
      const result = await requestApi.request(userInfo);

      if (!result.ok) {
        if (result.data) setError(result.data.error);
        if (!result.data) {
          setError("An Unexpected error occured.");
        }
        return null;
      }

      const { data: authToken } = await loginApi.request(
        userInfo.email,
        userInfo.password
      );
      auth.handleLogin(authToken);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AppActivityIndicator
        visible={requestApi.isLoading || loginApi.isLoading}
      />

      <Screen style={styles.container}>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={requestApi.error} visible={requestApi.error} />
          <AppFormField
            autoCorrect={false}
            icon="user"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="mail"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" color={colors.danger} />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
