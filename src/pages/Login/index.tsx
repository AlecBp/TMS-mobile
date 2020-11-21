import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';

const InputEmail = () => {
    const [text, setText] = React.useState('');
  
    return (
      <TextInput
        label="Email"
        autoCompleteType={"email"}
        value={text}
        onChangeText={text => setText(text)}
      />
    );
  };

  const InputPassword = () => {
    const [text, setText] = React.useState('');
  
    return (
      <TextInput
        label="Password"
        autoCompleteType={"password"}
        value={text}
        onChangeText={text => setText(text)}
      />
    );
  };

  const ButtonSignIn = () => (
    <Button mode="contained" onPress={() => console.log('Pressed')}>
      Log In
    </Button>
  );

const LoginPage = () => {

    return (
        <>
        
        <InputEmail />
        <InputPassword />
        <ButtonSignIn />
        </>
    )


}

export {LoginPage}