import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "react-native-paper";

const Footer: React.FC<{}> = () => {
  const materialTheme = useTheme();

  const styles = StyleSheet.create({
    bottom: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: `${materialTheme.dark ? "#fff" : "#000"}`,
      height: 35,
    },
  });

  return (
    <View style={styles.bottom}>
      {/* font1 style cannot be used since its background, the black and white is inverted */}
      <Text style={{color: `${materialTheme.dark ? '#000' : '#fff'}`}}>Tutoring Management System © 2020 - V 0.1.0</Text>
    </View>
  );
};
export default Footer;
