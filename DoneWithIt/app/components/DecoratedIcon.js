import React from "react";
import { StyleSheet, View } from "react-native";
import Wrapper from "./Wrapper";

function DecoratedIcon({
  icon,
  size = 40,
  backgroundColor = "#000",
  color = "#fff",
  iconScaleFactor = 0.6,
}) {
  const styles = StyleSheet.create({
    iconContainer: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.iconContainer}>
      <Wrapper element={icon} size={size * iconScaleFactor} color={color} />
    </View>
  );
}

export default DecoratedIcon;
