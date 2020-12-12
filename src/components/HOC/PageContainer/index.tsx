import React from "react";
import { View, ScrollView } from "react-native";

import Footer from "../../Footer";

// @ts-ignore
import { ThemeContext } from "../../../context/ThemeContext";
import { getAccessToken } from "../../../auth/accessToken";

export default (Contents: any) => {
  return (args: any) => {
    return (
      // this flex: 1 would make a footer at the bottom throughout the application
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={{ padding: 10 }}>
            <Contents {...args} />
          </View>
        </ScrollView>
        {getAccessToken() == "" && <Footer />}
      </View>
    );
  };
};
