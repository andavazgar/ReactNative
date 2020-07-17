import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { Course } from "../interfaces";
import SectionScreen from "../screen/SectionScreen";

import Routes from "./Routes";
import TabsNavigator from "./TabsNavigator";

export type AppNavigatorParamList = {
  [Routes.HOME_SCREEN]: undefined;
  [Routes.DETAIL_SCREEN]: { courseInfo: Course };
};

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator headerMode="none" mode="modal">
    <Stack.Screen name={Routes.TABS_NAVIGATOR} component={TabsNavigator} />
    <Stack.Screen name={Routes.DETAIL_SCREEN} component={SectionScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
