import React from "react";
import { StyleSheet, View } from "react-native";
import ListEditScreen from "./app/screens/ListEditScreen";

export default function App() {
  return (
    // <View style={styles.container}></View>
    <ListEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
