import React, { useContext, useState } from "react";
import { Image, StyleSheet } from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import authApi from "../api/auth";
import * as yup from "yup";
import AppForm from "../components/Forms/AppForm";
import AppFormField from "../components/Forms/AppFormField";
import SubmitButton from "../components/Forms/SubmitButton";
import useAuth from "../hooks/useAuth";
import ErrorMessage from "../components/Forms/ErrorMessage";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginFailed, setLoginFailed] = useState(false);
  const { handleLogin } = useAuth();

  const handleSubmit = async (loginInfo) => {
    const result = await authApi.login(loginInfo.email, loginInfo.password);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    handleLogin(result.data);
  };

  return (
    <Screen style={styles.screen}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invisible email and/or password"
          visible={loginFailed}
        />
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
