import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const ErrorMsg: React.FC<{ msg: string }> = ({ msg }) => {
  const {font17}:any = useTheme();
  const materialTheme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialIcons name="error-outline" size={24} color={`${materialTheme.dark ? "white" : "black"}`} />
      <Text style={font17}>{msg}</Text>
    </View>
  );
};

export default ErrorMsg;