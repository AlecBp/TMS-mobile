import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  restOfWord: {
    color: "#737373",
    fontSize: 30,
  },
  firstLetter: {
    color: "black",
    fontSize: 30,
  },
});

const PageTitle: React.FC<{ words: string }> = ({words}) => {

  return (
    <View>
      {words.split(' ').map((word: string, i: number) => (
        <Text style={styles.firstLetter} key={i}>
          {word[0].toUpperCase()}
          <Text style={styles.restOfWord}>{word.substr(1, word.length)}</Text>
        </Text>
      ))}
    </View>
  )
};

export default PageTitle;
