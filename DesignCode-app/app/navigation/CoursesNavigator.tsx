import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import CoursesScreen from "../screen/CoursesScreen";

import Routes from "./Routes";

const Stack = createStackNavigator();
const CoursesNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.COURSES_SCREEN} component={CoursesScreen} />
  </Stack.Navigator>
);

export default CoursesNavigator;
