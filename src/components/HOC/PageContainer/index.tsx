import React from "react";
import { View, ScrollView } from "react-native";
import Footer from "../../Footer";
import { styles } from "./style";

export default (Contents: any) => {
  return function (args: any) {
    return (
      // this flex: 1 would make a footer at the bottom throughout the application
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.container}>
          <Contents {...args} navigation={args.navigation} />
        </ScrollView>
        <Footer />
      </View>
    );
  };
};