import React from 'react';
import {View} from "react-native";
import Footer from "../../Footer";
import PageTitle from "../../PageTitle";

export default (Contents: any) => {
  return function(args: any) {
    return (
      <View>
        

        <Contents navigation={args.navigation} />

        <Footer />
      </View>
    )
  }
}