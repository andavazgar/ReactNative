import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import icons from "../config/icons";
import Wrapper from "../components/Wrapper";

function ViewImageScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/chair.jpg")}
      style={styles.container}
      resizeMode="contain"
    >
      <View style={styles.iconsContainer}>
        {icons.close}
        <Wrapper element={icons.trash} style={styles.deleteIcon} />
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
