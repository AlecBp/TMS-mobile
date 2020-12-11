import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import PageContainer from "../../components/HOC/PageContainer";

// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";
import PageTitle from "../../components/PageTitle";

import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  title: {
    marginTop: 60,
    marginBottom: 30,
    marginLeft: 50,
  },

  formGroup: {
    height: 50,
    marginVertical: 5,
  },
});

const ForgotPassword = () => {
  
  const [email, setEmail] = React.useState("");

  const { dispatch } = React.useContext(UserContext);

  const handleForgotPassword = async () => {
    //To be implemented
    return;
  };

  const {primaryBtn, font1} = useTheme();

  return (
    <>
      <Text style={font1} >
        A new temporary password will be sent to your email address
      </Text>
      <TextInput
        label="Email"
        mode="outlined"
        autoCompleteType={"email"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.formGroup}
      />

      <Button
        mode="contained"
        onPress={() => {
          console.log("Pressed");
          handleForgotPassword();
        }}
        style={primaryBtn}
      >
        Recover my password
      </Button>
    </>
  );
};

export default PageContainer(ForgotPassword);
