import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {LoginPage} from './src/pages/Login/index';
import Home from "./src/pages/Home";
import PastSessions from "./src/pages/PastSessions";
// @ts-ignore
import TutorPage from "./src/pages/TutorPage";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
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
      <Stack.Screen name="PastSessions" component={PastSessions} options={{title: 'Past Sessions'}}/>
      <Stack.Screen name="TutorPage" component={TutorPage} options={{title: 'Tutor'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
