import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";

function AppPickerItem({ item, numberOfColumns, onPress }) {
  return (
    <TouchableOpacity
      style={{ width: `${parseInt(100 / numberOfColumns)}%` }}
      onPress={onPress}
    >
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default AppPickerItem;
