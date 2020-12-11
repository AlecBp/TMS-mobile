import React, { useState, useContext } from "react";
import { View, ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import Footer from "../../Footer";
import { styles } from "./style";

// @ts-ignore
import { ThemeContext } from "../../../context/ThemeContext";
import { getAccessToken } from "../../../auth/accessToken";

export default (Contents: any) => {
  return (args: any) => {
    return (
      // this flex: 1 would make a footer at the bottom throughout the application
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Contents {...args} navigation={args.navigation} />
        </ScrollView>
        {getAccessToken() == "" && <Footer />}
      </View>
    );
  };
};
