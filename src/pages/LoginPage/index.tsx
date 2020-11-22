import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [login] = useLoginMutation();

  const { dispatch } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const loginResponse = await login({ variables: { email, password } });
      console.log(loginResponse);

      if (loginResponse && loginResponse?.data?.login?.token) {
        dispatch({
          type: SET_ACCESS_TOKEN,
          payload: { accessToken: loginResponse.data.login.token },
        });
      }
    } catch (err) {
      setError("Error");
      console.log(err);
    }
  };

  return (
    <>
      {error ? <Text>Ops, something went wrong... Double check your credentials and try again!</Text> : <Text></Text>}
      <TextInput label="Email" autoCompleteType={"email"} value={email} onChangeText={(text) => setEmail(text)} />
      <TextInput
        label="Password"
        autoCompleteType={"password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        mode="contained"
        onPress={() => {
          console.log("Pressed");
          handleLogin();
        }}
      >
        Log In
      </Button>
    </>
  );
};

export { LoginPage };
