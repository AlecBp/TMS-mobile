import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";
import PageTitle from "../../components/PageTitle";

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

  title: {
    marginTop: 60,
    marginBottom: 30,
    marginLeft: 50,
  },
  forgot: {
    marginLeft: 50,
    marginRight: 50,
  },
});

const ForgotPassword = () => {
  const [email, setEmail] = React.useState("");

  const { dispatch } = React.useContext(UserContext);

  const handleForgotPassword = async () => {
    //To be implemented
    return;
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
      <Text style={styles.forgot}>A new temporary password will be sent to your email address</Text>
      <TextInput
        label="Email"
        autoCompleteType={"email"}
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={() => {
          console.log("Pressed");
          handleForgotPassword();
        }}
        style={styles.button}
      >
        Recover my password
      </Button>
    </>
  );
};

export default ForgotPassword;
