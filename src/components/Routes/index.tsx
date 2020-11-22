import { gql, useQuery } from "@apollo/client";
import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { useCustomersQuery } from "../../graphql/generated/graphql";
import { LoginPage } from "../../pages/LoginPage";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN, CLEAR } from "./../../context/UserContext";

const Routes: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);

  return (
    <View>
      <Text>Home</Text>
      <LoginPage />
      <Text>{state.accessToken}</Text>
      <Text>{state.user ? `User: ${state.user.firstName} ${state.user.lastName} | Role: ${state.user.role}` : ""}</Text>
    </View>
  );
};

export default Routes;
