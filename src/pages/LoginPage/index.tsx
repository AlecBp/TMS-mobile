import { StyleSheet, Text, View, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React, { useState, useContext } from "react";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

import PageTitle from "../../components/PageTitle";
import PageContainer from "../../components/HOC/PageContainer";
import { setAccessToken } from "../../auth/accessToken";

import { useNavigation } from "@react-navigation/native";

import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    marginBottom: 30,
  },
});

// @ts-ignore
const LoginPage = () => {
  const navigation = useNavigation();
  const { btn }: object = useTheme();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

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
      if (err.message === "Wrong password")
        errorMsgBox("Your email and/or password are wrong", "");
      else
        errorMsgBox(
          "Ops, something went wrong..",
          "Double check your credentials"
        );
    }
  };

  const errorMsgBox = (text: string, msg: string | undefined) =>
    Alert.alert(
      text,
      msg,
      [{ text: "Try again", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );

  return (
    <>
      <View style={styles.title}>
        <PageTitle words="Tutoring Management System" />
      </View>

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

      <Button mode="contained" onPress={handleLogin} style={btn}>
        Log In
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate("ForgotPassword")}
        style={[styles.formGroup, { justifyContent: "center" }]}
      >
        Forgot Password ?
      </Button>
    </>
  );
};

export default PageContainer(LoginPage);
