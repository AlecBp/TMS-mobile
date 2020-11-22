import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
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

      <Button
        onPress={() =>
          dispatch({
            type: SET_ACCESS_TOKEN,
            payload: {
              accessToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZmI5ODg3OGM3ZDdkMjY1NjAyNGY5OTUiLCJyb2xlIjoiUk9MRV9VU0VSIiwiZmlyc3ROYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiZW1haWwiOiJqb2huQGdtYWlsLmNvbSIsImlhdCI6MTYwNTk5NDYyNiwiZXhwIjoxNjA1OTk0NjQxfQ.XXv19csnBYHThv7g5PfxcLXjohnna_v8i7pnA7Putjg",
            },
          })
        }
      >
        Set dummy token
      </Button>

      <Button
        onPress={() =>
          dispatch({
            type: CLEAR,
          })
        }
      >
        Clear
      </Button>
    </View>
  );
};

export default Routes;
