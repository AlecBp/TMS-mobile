import "react-native-gesture-handler";
import React, { useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
import { Provider as PaperProvider, Text } from "react-native-paper";
import { CustomDefaultTheme, CustomDarkTheme } from "../Theme";

const MyTabBarIcon = ({focused, name}:any) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return <Ionicons
    name={name}
    size={24}
    color={`${focused ? "#6200EF" : isDarkTheme ? "white" : "black"}`}
  />;
};

const MyTabBarLabel = ({focused, label}:any) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return <Text style={{ color: `${focused ? "#6200EF" :  isDarkTheme ? "white" : "black"}` }}>
  {label}
</Text>;
};

const Routes: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);

  console.log(state);

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const Stack = createStackNavigator();

  // if (!state.accessToken) return <LoginPage />;

  if (!state.accessToken) {
    return (
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
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

  const Tab = createBottomTabNavigator();

  const HomeTab = () => (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => <MyTabBarIcon {...props} name="ios-home" />,
          tabBarLabel: (props) => <MyTabBarLabel {...props} label="Home" /> ,
        }}
      />
      <Tab.Screen
        name="PastSessions"
        component={PastSessions}
        options={{
          tabBarIcon: (props) => <MyTabBarIcon {...props} name="md-document" />,
          tabBarLabel: (props) => <MyTabBarLabel {...props} label="Past Sessions" />,
        }}
      />
      <Tab.Screen
        name="TutorPage"
        component={TutorPage}
        options={{
          tabBarIcon: (props) => <MyTabBarIcon {...props} name="ios-person" />,
          tabBarLabel: (props) => <MyTabBarLabel {...props} label="User" />,
        }}
      />
    </Tab.Navigator>
  );

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTab}
            options={{ title: "Tutoring Management System" }}
          />
          <Stack.Screen
            name="SessionDetails"
            component={SessionDetails}
            options={{ title: "Session Details" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
