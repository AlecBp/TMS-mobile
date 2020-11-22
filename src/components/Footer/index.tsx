import React from "react";
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'black',
    height: 35,
  }
})

const Footer = () => (
  <View style={styles.bottom}>
    <Text style={{color: "white"}}>Tutoring Management System © 2020 - V 0.1.0</Text>
  </View>
)
export default Footer;