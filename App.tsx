import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from "./src/pages/Home";
import PastSessions from "./src/pages/PastSessions";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Apollo from "./src/components/Apollo";
import Root from "./src/components/Root";

// @ts-ignore
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Apollo>
        <Root />
      </Apollo>
    </UserProvider>
  );
}
