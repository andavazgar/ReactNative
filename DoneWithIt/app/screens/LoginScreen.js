import React, { useState, useContext } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import JwtDecode from "jwt-decode";

import { AppForm, AppFormField, ErrorMessage, SubmitButton } from "../components/forms";
import icons from "../config/icons";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import AuthContext from "../auth/context";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen() {
  const [loginError, setLoginError] = useState("");
  const authContext = useContext(AuthContext);

  const handleSubmit = async ({ email, password }) => {
    const response = await authApi.login(email, password);

    if (!response.ok) {
      setLoginError(response.data.error);
      return;
    }

    setLoginError("");
    const user = JwtDecode(response.data);
    authContext.setUser(user);
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <ErrorMessage error={loginError} isVisible={loginError !== ""} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
