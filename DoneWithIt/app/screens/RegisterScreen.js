import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton, ErrorMessage } from "../components/forms";
import icons from "../config/icons";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import usersApi from "../api/users";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const [registrationError, setRegistrationError] = useState("");
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();

  const handleRegistration = async (userInfo) => {
    const response = await registerApi.request(userInfo);

    if (!response.ok) {
      if (response.data.error) {
        setRegistrationError(response.data.error);
      } else {
        setRegistrationError("An unexpected error occurred");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);

    auth.logIn(authToken);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen>
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleRegistration}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={registrationError} isVisible={registrationError} />

          <AppFormField name="name" icon={icons.person} placeholder="Name" />

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

          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({});

export default RegisterScreen;
