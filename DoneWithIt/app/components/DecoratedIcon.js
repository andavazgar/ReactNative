import React from "react";
import { StyleSheet, View } from "react-native";

function DecoratedIcon({
  IconComponent,
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

  const icon = { ...IconComponent };
  icon.props = { ...icon.props, size: size * iconScaleFactor, color };
  return <View style={styles.iconContainer}>{icon}</View>;
}

export default DecoratedIcon;
