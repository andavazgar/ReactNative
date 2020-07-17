import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ProjectsScreen from "../screen/ProjectsScreen";

import Routes from "./Routes";

const Stack = createStackNavigator();
const ProjectsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.PROJECTS_SCREEN} component={ProjectsScreen} />
  </Stack.Navigator>
);

export default ProjectsNavigator;
