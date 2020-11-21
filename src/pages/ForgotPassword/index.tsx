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

    },

    title:{
        marginTop: 60,
        marginBottom: 30,
        marginLeft: 50,
        fontSize: 30,
    },
    forgot:{
        marginLeft: 50,
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
      Submit
    </Button>
  ); 

const ForgotPassword = () => {

    return (
        <>
        <SafeAreaView>
        <Title style={styles.title}>{`Tutoring \nManagement \nSystem`}</Title>
        <InputEmail />
        <Submit />
        
        </SafeAreaView>
        </>
    )


}

export {ForgotPassword}