import React from "react";
import { StyleSheet, } from 'react-native';
import { Text } from "react-native-paper";

const styles = StyleSheet.create({
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        height: 35,
        paddingVertical: 7
        
      }
})

const Footer = () => {

    return (
        <>
        <Text style={styles.bottom}>Tutoring Management System © 2020 - V 0.1.0</Text>
        </>
    )
}

export default Footer;