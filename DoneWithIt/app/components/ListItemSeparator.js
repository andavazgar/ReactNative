import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../config/Colors";

function ListItemSeparator({ style }) {
  return <View style={[styles.separator, style]} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.lightGray,
  },
});

export default ListItemSeparator;
