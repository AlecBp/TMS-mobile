import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 

const ErrorMsg: React.FC<{msg: string}>  = ({msg}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      <Text>{msg}</Text>
    </View>  
  )
}

export default ErrorMsg;