import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LoginPage} from './src/pages/Login/index';
import {TextInputExample} from './src/pages/Login/index2';


export default function App() {
  return (
    <LoginPage />
     
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
