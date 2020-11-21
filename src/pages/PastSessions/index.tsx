import React from "react";
import {SafeAreaView, View} from "react-native";
import {styles} from "../Home/style";
import {Avatar, IconButton, Title, Colors} from "react-native-paper";

// @ts-ignore
function PastSessions({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {/*<IconButton />*/}
        <IconButton
          icon="camera"
          color={Colors.red500}
          size={20}
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
}


export default PastSessions;