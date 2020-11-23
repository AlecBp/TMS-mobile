import React from "react";
import Apollo from "./src/components/Apollo";
import Root from "./src/components/Root";

import LoginPage from "./src/pages/LoginPage";
import SessionDetails from "./src/pages/SessionDetails";


// @ts-ignore
import { UserProvider } from "./src/context/UserContext";
import Routes from "./src/components/Routes"
import Home from "./src/pages/Home";
import PastSessions from "./src/pages/PastSessions";
import TutorPage from "./src/pages/TutorPage";
import ForgotPassword from "./src/pages/ForgotPassword";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (

    <UserProvider>
      <Apollo>
        <Root />
        
      </Apollo>
    </UserProvider>

  );
}
