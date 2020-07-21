import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import React from "react";

import Icon from "../components/Wrapper";
import colors from "../config/colors";
import icons from "../config/icons";

import CoursesNavigator from "./CoursesNavigator";
import HomeNavigator from "./HomeNavigator";
import ProjectsNavigator from "./ProjectsNavigator";
import Routes from "./Routes";

const Tabs = createBottomTabNavigator();
const TabsNavigator = () => {
  const getTabBarVisible = (
    route: RouteProp<Record<string, object | undefined>, Routes.PROJECTS_SCREEN>
  ) => {
    if ("state" in route) {
      const { tabBarVisible } = route.state.routes[0].params;
      return tabBarVisible;
    }

    return true;
  };

  return (
    <Tabs.Navigator
      initialRouteName={Routes.PROJECTS_SCREEN} // TODO: Delete This!!!
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
        options={({ route }) => ({
          tabBarIcon: ({ color }) => <Icon element={icons.projects} size={26} color={color} />,
          tabBarVisible: getTabBarVisible(route),
        })}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
