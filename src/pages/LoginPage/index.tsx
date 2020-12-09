import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React, { useState, useContext } from "react";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

import PageTitle from "../../components/PageTitle";
import PageContainer from "../../components/HOC/PageContainer";
import { setAccessToken } from "../../auth/accessToken";

const styles = StyleSheet.create({
  formGroup: {
    height: 50,
    marginVertical: 5,
  },
  title: {
    marginTop: 60,
    marginBottom: 30,
  },
});

// @ts-ignore
const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [login] = useLoginMutation();

  const { dispatch } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const loginResponse = await login({ variables: { email, password } });

      if (loginResponse && loginResponse?.data?.login?.token) {
        setAccessToken(loginResponse.data.login.token);
        dispatch({
          type: SET_ACCESS_TOKEN,
          payload: { accessToken: loginResponse.data.login.token },
        });
      }
    } catch (err) {
      if (err.message === "Wrong password") setError("Your email and/or password are wrong, please try again.");
      else {
        setError("Ops, something went wrong... Double check your credentials and try again!");
        errorMsgBox();
      }
    }
  };

  const errorMsgBox = () =>
    Alert.alert(
      "Ops, something went wrong...",
      "Double check your credentials and try again!",
      [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <>
      <View style={styles.title}>
        <PageTitle words="Tutoring Management System" />
      </View>

      <Text>{error}</Text>
      <TextInput
        label="Email"
        mode="outlined"
        autoCompleteType={"email"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.formGroup}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry={true}
        autoCompleteType={"password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.formGroup}
      />

      <Button
        mode="contained"
        onPress={handleLogin}
        style={[styles.formGroup, { backgroundColor: "black", justifyContent: "center" }]}
      >
        Log In
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("ForgotPassword")}
        style={[styles.formGroup, { justifyContent: "center" }]}
      >
        Forgot Password ?
      </Button>

      {/* until the footer is positioned at the bottom*/}
      <View style={{ height: 700 }} />
    </>
  );
};

export default PageContainer(LoginPage);
