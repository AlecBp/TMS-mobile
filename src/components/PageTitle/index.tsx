import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

const PageTitle: React.FC<{ words: string }> = ({ words }) => {
  const materialTheme = useTheme();

  const styles = StyleSheet.create({
    restOfWord: {
      color: `${materialTheme.dark ? "#fff" : "#737373"}`,
      fontSize: 30,
    },
    firstLetter: {
      color: `${materialTheme.dark ? "#737373" : "#000"}`,
      fontSize: 30,
    },
  });

  return (
    <View>
      {words.split(" ").map((word: string, i: number) => (
        <Text style={styles.firstLetter} key={i}>
          {word[0].toUpperCase()}
          <Text style={styles.restOfWord}>{word.substr(1, word.length)}</Text>
        </Text>
      ))}
    </View>
  );
};

export default PageTitle;
