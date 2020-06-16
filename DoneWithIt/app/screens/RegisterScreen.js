import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppIcons from "../components/AppIcons";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          IconComponent={AppIcons.person}
          placeholder="Name"
        />

        <AppFormField
          name="email"
          IconComponent={AppIcons.email}
          placeholder="Email"
        />

        <AppFormField
          name="password"
          IconComponent={AppIcons.lock}
          placeholder="Password"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default RegisterScreen;
