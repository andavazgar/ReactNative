import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListEditScreen from "../screens/ListEditScreen";
import routes from "./routes";
import icons from "../config/icons";
import Wrapper from "../components/Wrapper";
import NewListingTabBarButton from "./NewListingTabBarButton";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name={routes.FEED_TAB.name}
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Wrapper element={icons.home} color={color} size={size} />
        ),
        tabBarLabel: routes.FEED_TAB.label,
      }}
    />
    <Tab.Screen
      name={routes.LISTING_EDIT_TAB.name}
      component={ListEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingTabBarButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT_TAB.name)}
          />
        ),
        tabBarLabel: routes.LISTING_EDIT_TAB.label,
      })}
    />
    <Tab.Screen
      name={routes.ACCOUNT_TAB.name}
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Wrapper element={icons.person} color={color} size={size} />
        ),
        tabBarLabel: routes.ACCOUNT_TAB.label,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
