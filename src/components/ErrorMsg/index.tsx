import React from "react";
import { Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "react-native-paper";

const ErrorMsg: React.FC<{ msg: string }> = ({ msg }) => {
  const { font17 }: any = useTheme();
  const materialTheme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
      }}
    >
      <MaterialIcons
        style={{ marginRight: 0, padding: 0 }}
        name="error-outline"
        size={128}
        color={`${materialTheme.dark ? "white" : "black"}`}
      />
      <Text style={[font17, { padding: 0, textAlign: "center" }]}>{msg}</Text>
    </View>
  );
};

export default ErrorMsg;
