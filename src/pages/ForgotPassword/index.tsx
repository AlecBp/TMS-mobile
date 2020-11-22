import * as React from "react";
import { StyleSheet, Text } from 'react-native';
import { TextInput, Button, Title } from "react-native-paper";
import { useLoginMutation } from "../../graphql/generated/graphql";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN } from "./../../context/UserContext";

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
        backgroundColor: 'black'
    },

    title:{
        marginTop: 60,
        marginBottom: 30,
        marginLeft: 50,
        fontSize: 30,
    },
    forgot:{
        marginLeft: 50,
        marginRight: 50,
    }

  
    
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
        
        <Title style={styles.title}>{`Tutoring \nManagement \nSystem`}</Title>
        <Text style={styles.forgot}>A new temporary password will be sent to your email address</Text>
        <TextInput 
          label="Email" 
          autoCompleteType={"email"} 
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          style={styles.input}/>
        
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
    )


}

export default ForgotPassword 