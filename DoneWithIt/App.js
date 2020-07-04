import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/config/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  setTimeout(() => setLoggedIn(true), 2000);

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {loggedIn ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}
