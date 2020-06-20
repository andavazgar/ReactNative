import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  Text,
  SafeAreaView,
} from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={10}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          style={styles.registerButton}
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
        {/* TODO: Delete this */}
        <AppButton
          style={{ backgroundColor: colors.yellow }}
          title="Go to app"
          onPress={() => navigation.navigate("FeedTab")}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    resizeMode: "contain",
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 70,
  },
  registerButton: {
    backgroundColor: colors.secondary,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
