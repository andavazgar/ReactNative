import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";
import { Ionicons, EvilIcons } from "@expo/vector-icons";

import Colors from "../config/Colors";

function ViewImageScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/chair.jpg")}
      style={styles.container}
      resizeMode="contain"
    >
      <View style={styles.iconsContainer}>
        <Ionicons name="md-close" color={Colors.light} size={30} />
        <EvilIcons
          style={styles.deleteIcon}
          name="trash"
          color={Colors.light}
          size={40}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  deleteIcon: {
    marginRight: -10,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: 40,
  },
});

export default ViewImageScreen;
