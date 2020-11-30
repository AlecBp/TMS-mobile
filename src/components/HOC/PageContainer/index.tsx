import React from 'react';
import {View} from "react-native";
import Footer from "../../Footer";

export default (Contents: any) => {
  return function(args: any) {
    return (
      <View>

        <Contents />

        <Footer />
      </View>
    )
  }
}