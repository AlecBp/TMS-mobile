import * as React from "react";
import { TextInput, Button } from "react-native-paper";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

const InputEmail = () => {
  const [text, setText] = React.useState("");

  return <TextInput label="Email" autoCompleteType={"email"} value={text} onChangeText={(text) => setText(text)} />;
};

const InputPassword = () => {
  const [text, setText] = React.useState("");

  return (
    <TextInput label="Password" autoCompleteType={"password"} value={text} onChangeText={(text) => setText(text)} />
  );
};

const ButtonSignIn = () => (
  <Button mode="contained" onPress={() => console.log("Pressed")}>
    Log In
  </Button>
);

const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [login] = useLoginMutation();

  const { dispatch } = React.useContext(UserContext);

  const handleLogin = async () => {
    try {
      const loginResponse = await login({ variables: { email, password } });
      console.log(loginResponse);

      if (loginResponse && loginResponse?.data?.login?.token) {
        dispatch({
          type: SET_ACCESS_TOKEN,
          payload: { accessToken: loginResponse.data.login.token },
        });
        // Send to home page
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
