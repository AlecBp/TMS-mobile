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
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <Apollo>
        <Root />
        {/* <NavigationContainer>
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
        <Stack.Screen name="PastSessions" component={PastSessions} options={{ title: "Past Sessions" }} />
        <Stack.Screen name="TutorPage" component={TutorPage} options={{ title: "Tutor Page" }} />
        <Stack.Screen name="SessionDetails" component={SessionDetails} options={{ title: "Session Details" }} />
      </Stack.Navigator>
    </NavigationContainer> */}
      </Apollo>
    </UserProvider>
  );
}
