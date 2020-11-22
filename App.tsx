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
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (

    <UserProvider>
      <Apollo>
        {/*<Root />*/}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#0655ab",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen name="Home" component={Home} options={{ title: "Upcoming Sessions" }} />
            <Stack.Screen name="SessionDetails" component={SessionDetails} options={{ title: "Session Details" }} />
            <Stack.Screen name="PastSessions" component={PastSessions} options={{ title: "Past Sessions" }} />
            <Stack.Screen name="TutorPage" component={TutorPage} options={{ title: "Tutor Page" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Apollo>
    </UserProvider>

  );
}
