import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Icon from "../components/Wrapper";
import colors from "../config/colors";
import icons from "../config/icons";

import CoursesNavigator from "./CoursesNavigator";
import HomeNavigator from "./HomeNavigator";
import ProjectsNavigator from "./ProjectsNavigator";
import Routes from "./Routes";

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: colors.primary,
      inactiveTintColor: colors.mediumGray,
    }}
  >
    <Tabs.Screen
      name={Routes.HOME_SCREEN}
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ color }) => <Icon element={icons.home} size={26} color={color} />,
      }}
    />
    <Tabs.Screen
      name={Routes.COURSES_SCREEN}
      component={CoursesNavigator}
      options={{
        tabBarIcon: ({ color }) => <Icon element={icons.courses} size={26} color={color} />,
      }}
    />
    <Tabs.Screen
      name={Routes.PROJECTS_SCREEN}
      component={ProjectsNavigator}
      options={{
        tabBarIcon: ({ color }) => <Icon element={icons.projects} size={26} color={color} />,
      }}
    />
  </Tabs.Navigator>
);

export default TabsNavigator;
