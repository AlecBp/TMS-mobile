import React from 'react';
import {ActivityIndicator, Text, View} from "react-native";

function LoadingSpinner (props: { text: any; size: any; color: any; }) {
  const {text, size, color} = props;

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <ActivityIndicator size={size} color={color}/>
      <Text style={{marginTop: 10, color: color}} >{text}</Text>
    </View>
  )
}

export default LoadingSpinner
