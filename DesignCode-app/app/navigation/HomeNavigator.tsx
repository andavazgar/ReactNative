import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import HomeScreen from "../screen/HomeScreen";

import Routes from "./Routes";

export type HomeNavigatorParamList = {
  [Routes.HOME_SCREEN]: undefined;
  [Routes.DETAIL_SCREEN]: undefined;
};

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name={Routes.HOME_SCREEN} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
