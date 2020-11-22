import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("password");

  const [error, setError] = useState("");

  const [login] = useLoginMutation();

  const { dispatch } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const loginResponse = await login({ variables: { email, password } });

      if (loginResponse && loginResponse?.data?.login?.token) {
        dispatch({
          type: SET_ACCESS_TOKEN,
          payload: { accessToken: loginResponse.data.login.token },
        });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  let body: string = "";

  if (error === "Wrong password") body = "Your email and/or password are wrong, please try again.";
  else if (error) body = "Ops, something went wrong... Double check your credentials and try again!";

  return (
    <>
      <Text>{body}</Text>
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
