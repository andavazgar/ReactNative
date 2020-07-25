import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageSourcePropType,
  Keyboard,
} from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import colors from "../config/colors";
import useApi from "../hooks/useApi";

export interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = ({}) => {
  const EMAIL_ICON: ImageSourcePropType = require("../assets/icon-email.png");
  const EMAIL_ICON_ACTIVE: ImageSourcePropType = require("../assets/icon-email-active.png");
  const PASSWORD_ICON: ImageSourcePropType = require("../assets/icon-password.png");
  const PASSWORD_ICON_ACTIVE: ImageSourcePropType = require("../assets/icon-password-active.png");

  const [formState, setFormState] = useState({
    email: { value: "", icon: EMAIL_ICON },
    password: { value: "", icon: PASSWORD_ICON },
  });

  // TODO: Remove this when backend API is hooked.
  const loginApi = useApi(true, () => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => resolve(new Response("Worked great!")));
  });

  const handleLogin = () => {
    loginApi.request();
  };

  const handleFocus = (field: keyof typeof formState) => {
    const { email, password } = formState;
    let newFormState: typeof formState;

    switch (field) {
      case "email":
        newFormState = {
          email: { ...email, icon: EMAIL_ICON_ACTIVE },
          password: { ...password, icon: PASSWORD_ICON },
        };
        setFormState(newFormState);
        break;
      case "password":
        newFormState = {
          email: { ...email, icon: EMAIL_ICON },
          password: { ...password, icon: PASSWORD_ICON_ACTIVE },
        };
        setFormState(newFormState);
        break;
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <BlurView style={styles.container} tint="dark" intensity={100}>
          <View style={styles.modal}>
            <Image style={styles.logo} source={require("../assets/logo-dc.png")} />
            <Text style={styles.title}>Start Learning. Access Pro Content.</Text>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.textInputIcon}
                source={formState.email.icon}
                resizeMode="contain"
              />
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={(email) =>
                  setFormState({ ...formState, email: { ...formState.email, value: email } })
                }
                onFocus={() => handleFocus("email")}
              />
            </View>
            <View style={styles.textInputContainer}>
              <Image
                style={styles.textInputIcon}
                source={formState.password.icon}
                resizeMode="contain"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry
                onChangeText={(password) =>
                  setFormState({
                    ...formState,
                    password: { ...formState.password, value: password },
                  })
                }
                onFocus={() => handleFocus("password")}
              />
            </View>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
      <ActivityIndicator isLoading={loginApi.loading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.75)",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 44,
    height: 44,
    marginTop: 50,
  },
  modal: {
    width: 335,
    height: 370,
    backgroundColor: "white",
    borderRadius: 20,
    shadowOffset: { width: 0, height: 20 },
    shadowRadius: 40,
    shadowOpacity: 0.15,
    alignItems: "center",
  },
  submitButton: {
    backgroundColor: colors.button,
    width: 295,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowColor: "#c2cbff",
    shadowOpacity: 1,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#dbdfea",
    borderRadius: 10,
    width: 295,
    height: 44,
    fontSize: 17,
    color: colors.secondary,
    paddingLeft: 44,
  },
  textInputContainer: {
    justifyContent: "center",
    marginTop: 20,
  },
  textInputIcon: {
    position: "absolute",
    width: 24,
    height: 22,
    marginLeft: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 13,
    fontWeight: "600",
    textTransform: "uppercase",
    width: 160,
    textAlign: "center",
    color: colors.mediumGray,
  },
});

export default LoginScreen;
