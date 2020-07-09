import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from "../components/forms";
import icons from "../config/icons";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const loginApi = useApi(authApi.login);
  const auth = useAuth();

  const handleSubmit = async ({ email, password }) => {
    const response = await loginApi.request(email, password);

    if (response.ok) {
      auth.logIn(response.data);
    }
  };

  return (
    <>
      <ActivityIndicator visible={loginApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={loginApi.data.error} isVisible={loginApi.error} />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={icons.email}
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon={icons.lock}
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />

          <SubmitButton title="Login" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 30,
  },
});

export default LoginScreen;
