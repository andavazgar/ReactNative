import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import Wrapper from "../components/Wrapper";
import icons from "../config/icons";

function NewListingTabBarButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Wrapper element={icons.addCircle} color={colors.light} size={40} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 10,
    borderColor: colors.light,
    bottom: 20,
    backgroundColor: colors.primary,
    overflow: "hidden",
  },
});

export default NewListingTabBarButton;
