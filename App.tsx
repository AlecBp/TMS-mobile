import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {LoginPage} from './src/pages/Login/index';
import Home from "./src/pages/Home";
import PastSessions from "./src/pages/PastSessions";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <LoginPage />
    // <PastSessions />

  <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "#0655ab",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Upcoming Sessions'}}/>
      <Stack.Screen name="PastSessions" component={PastSessions} options={{title: 'Upcoming Sessions'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
