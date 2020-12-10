import React from "react";
import Apollo from "./src/components/Apollo";
import Root from "./src/components/Root";
import Routes from "./src/components/Routes";
import Home from "./src/pages/Home";
import PastSessions from "./src/pages/PastSessions";
import SessionDetails from "./src/pages/SessionDetails";
import TutorPage from "./src/pages/TutorPage";
import ForgotPassword from "./src/pages/ForgotPassword";
import { NavigationContainer } from "@react-navigation/native";

// @ts-ignore
import { UserProvider } from "./src/context/UserContext";
// @ts-ignore
import { ThemeProvider } from "./src/context/ThemeContext";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
      <Apollo>
        <Root />
      </Apollo>
      </ThemeProvider>
    </UserProvider>
  );
}
