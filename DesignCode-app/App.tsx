import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import HomeScreen from "./app/screen/HomeScreen";
import configureStore from "./app/store/configureStore";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <StatusBar style="auto" />
      <HomeScreen />
    </Provider>
  );
}
