import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    // <View style={styles.container}></View>
    <ViewImageScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
});
