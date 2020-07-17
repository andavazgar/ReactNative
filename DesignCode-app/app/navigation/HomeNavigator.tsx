import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screen/HomeScreen";

import Routes from "./Routes";

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
