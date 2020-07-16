import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "./app/config/store/configureStore";
import HomeScreen from "./app/screen/HomeScreen";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <StatusBar style="auto" />
      <HomeScreen />
    </Provider>
  );
}
