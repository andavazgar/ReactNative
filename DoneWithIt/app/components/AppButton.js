import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../config/Colors";

function AppButton({ style, title, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  text: {
    color: Colors.light,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
