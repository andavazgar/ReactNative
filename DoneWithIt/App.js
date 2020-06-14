import React from "react";
import { StyleSheet, Text, View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  return (
    // <View style={styles.container}></View>
    <ListingDetailsScreen />
    // <AccountScreen />
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
