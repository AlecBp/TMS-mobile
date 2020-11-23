import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const LoadingSpinner: React.FC<{ text: string; size: any; color: any }> = ({ text, size, color }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color} />
      <Text style={{ marginTop: 10, color: color }}>{text}</Text>
    </View>
  );
};

// @ts-ignore
export default LoadingSpinner;
