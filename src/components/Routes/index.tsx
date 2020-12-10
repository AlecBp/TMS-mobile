import "react-native-gesture-handler";
import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import Home from "../../pages/Home";
import PastSessions from "../../pages/PastSessions";
import TutorPage from "../../pages/TutorPage";
import LoginPage from "../../pages/LoginPage";
import SessionDetails from "../../pages/SessionDetails";

// @ts-ignore
import { UserContext } from "./../../context/UserContext";
// @ts-ignore
import { ThemeContext } from "./../../context/ThemeContext";
import ForgotPassword from "../../pages/ForgotPassword";

// Theme
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { useTheme, Provider as PaperProvider, DarkTheme as PaperDarkTheme, DefaultTheme as PaperDefaultTheme } from "react-native-paper";

const Routes: React.FC = () => {
  
  const { state, dispatch } = useContext(UserContext);
  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);

  console.log(state);

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
    btn: {
      backgroundColor: "black", 
      justifyContent: "center",
      height: 50,
      marginVertical: 5,
    },
    font1: {
      color: "#fff"
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
    },
    btn: {
      backgroundColor: "white", 
      justifyContent: "center",
      height: 50,
      marginVertical: 5,
      color: "black"
    },
    font1: {
      color: "#000"
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const Stack = createStackNavigator();

  // if (!state.accessToken) return <LoginPage />;

  if (!state.accessToken) {
    return (
      <PaperProvider theme={theme}>
      <NavigationContainer theme={theme} >
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: `${isDarkTheme ? "#fff" : "#000"}`,
            },
            headerTintColor: `${isDarkTheme ? "#000" : "#fff"}`,
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ title: "Forgot Password" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider> 
    );
  }

  return (
    <NavigationContainer theme={NavigationDarkTheme}>
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Upcoming Sessions" }}
        />
        <Stack.Screen
          name="PastSessions"
          component={PastSessions}
          options={{ title: "Past Sessions" }}
        />
        <Stack.Screen
          name="TutorPage"
          component={TutorPage}
          options={{ title: "Tutor Page" }}
        />
        <Stack.Screen
          name="SessionDetails"
          component={SessionDetails}
          options={{ title: "Session Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
