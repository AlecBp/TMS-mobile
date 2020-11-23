import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button,  } from "react-native-paper";
import React, { useState, useContext } from "react";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

import PageTitle from "../../components/PageTitle";
import Footer from "../../components/Footer";

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
    height: 50,
  },
  button: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    height: 40,
    backgroundColor: "black",
  },
  forgot: {
    marginLeft: 50,
  },
  title: {
    marginTop: 60,
    marginBottom: 30,
    marginLeft: 50,
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

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
      if (err.message === "Wrong password") setError("Your email and/or password are wrong, please try again.");
      else setError("Ops, something went wrong... Double check your credentials and try again!");
    }
  };

  return (
    <>
    <View style={styles.title}> 
      <PageTitle 
        firstLetter1="T" restOfWord1="utoring" 
        firstLetter2="M" restOfWord2="anagement"
        firstLetter3="S" restOfWord3="ystem"
        />
    </View>

      <Text>{error}</Text>
      <TextInput
        label="Email"
        autoCompleteType={"email"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <TextInput
        label="Password"
        secureTextEntry={true}
        autoCompleteType={"password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />

      {/*Forgot password needs to be implemented to send user to ForgotPassword page*/}
      <Text style={styles.forgot}>Forgot password?</Text>

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Log In
      </Button>
    </>
  );
};

export default LoginPage;
