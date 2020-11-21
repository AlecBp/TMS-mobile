import React, { useContext } from "react";
import { View, Text } from "react-native";
// @ts-ignore
import { UserContext } from "./../../context/UserContext";

const Routes: React.FC = () => {
  const { state } = useContext(UserContext);

  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>
        {state.accessToken} {state.user ? state.user.firstName : ""}
      </Text>
    </View>
  );
};

export default Routes;
