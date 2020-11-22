import "react-native-gesture-handler"
import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "../../pages/Home";
import PastSessions from "../../pages/PastSessions";
import TutorPage from "../../pages/TutorPage";

// @ts-ignore
import { UserContext } from "./../../context/UserContext";
import { LoginPage } from "../../pages/LoginPage";

const Routes: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const Stack = createStackNavigator();

  if (!state.accessToken) {
    return <LoginPage />;
  }

  return (
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
        <Stack.Screen name="PastSessions" component={PastSessions} options={{ title: "Upcoming Sessions" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
