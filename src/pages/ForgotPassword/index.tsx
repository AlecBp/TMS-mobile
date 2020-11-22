import * as React from 'react';
import { TextInput, Button, Title } from 'react-native-paper';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Link } from '@react-navigation/native';

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

const InputEmail = () => {
    const [text, setText] = React.useState('');
  
    return (
      <TextInput
        label="Email"
        autoCompleteType={"email"}
        value={text}
        onChangeText={text => setText(text)}
        style={styles.input}
      />
    );
  };

  const Submit = () => (
    <Button 
        mode="contained" 
        onPress={() => console.log('Pressed')}
        style={styles.button}
        
        >
      Recover my password
    </Button>
  ); 

const ForgotPassword = () => {

    return (
        <>
        <SafeAreaView>
        <Title style={styles.title}>{`Tutoring \nManagement \nSystem`}</Title>
        <Text style={styles.forgot}>A new temporary password will be sent to your email address</Text>
        <InputEmail />
        <Submit />
        
        </SafeAreaView>
        </>
    )


}

export {ForgotPassword}