import React, { useState, useContext } from "react";
import { View, ScrollView } from "react-native";
import { Switch, useTheme } from "react-native-paper";
import Footer from "../../Footer";
import { styles } from "./style";
// @ts-ignore
import { ThemeContext } from "../../../context/ThemeContext";

export default (Contents: any) => {
  return (args: any) => {
    const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);
    const materialTheme = useTheme();
    return (
      // this flex: 1 would make a footer at the bottom throughout the application
      <View style={{ flex: 1 }}>
        <View>
          <Switch value={materialTheme.dark} onValueChange={toggleDarkTheme} />
        </View>
        <ScrollView style={styles.container}>
          <Contents {...args} navigation={args.navigation} />
        </ScrollView>
        <Footer />
      </View>
    );
  };
};
