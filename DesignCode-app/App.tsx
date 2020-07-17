import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import AppNavigator from "./app/navigation/AppNavigator";
import configureStore from "./app/store/configureStore";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
