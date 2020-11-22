import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "../../pages/Home";
import PastSessions from "../../pages/PastSessions";

// @ts-ignore
import { UserContext } from "./../../context/UserContext";

const Routes: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  const Stack = createStackNavigator();

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
