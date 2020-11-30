import React from 'react';
import {View, ScrollView} from "react-native";
import Footer from "../../Footer";
import { styles } from "./style";

export default (Contents: any) => {
  return function(args: any) {
    return (
      <View>
        <ScrollView style={styles.container}>
          <Contents navigation={args.navigation} />

        </ScrollView>
        <Footer />
      </View>
    )
  }
}