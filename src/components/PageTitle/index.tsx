import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  parent: {
    
    // marginTop: 60,
    // marginBottom: 30,
    // marginLeft: 50,
    
  },
  restOfWord: {
    color: "#737373",
    fontSize: 30,
  },
  firstLetter: {
    color: "black",
    fontSize: 30,
  },
});

const PageTitle: React.FC = (props: any) => (
  <View style={styles.parent}>
    <Text style={styles.firstLetter}>
      {props.firstLetter1}
      <Text style={styles.restOfWord}>{props.restOfWord1}</Text>
    </Text>
    <Text style={styles.firstLetter}>
      {props.firstLetter2}
      <Text style={styles.restOfWord}>{props.restOfWord2}</Text>
    </Text>
    <Text style={styles.firstLetter}>
      {props.firstLetter3}
      <Text style={styles.restOfWord}>{props.restOfWord3}</Text>
    </Text>
  </View>
);

export default PageTitle;
