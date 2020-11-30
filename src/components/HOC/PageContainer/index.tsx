import React from 'react';
import {View} from "react-native";
import Footer from "../../Footer";
import { styles } from "./style";

export default (Contents: any) => {
  return function(args: any) {
    return (
      <View>
        <View style={styles.container}>
          <Contents navigation={args.navigation} />

          <Footer />
        </View>
      </View>
    )
  }
}