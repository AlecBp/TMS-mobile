import React from "react";
import {FlatList, SafeAreaView, View} from "react-native";
import {styles} from "../Home/style";
import {IconButton, Title, Colors} from "react-native-paper";
import {sessions} from "../Home/sessions.js";
import SessionCard from "../../components/SessionCard";

// @ts-ignore
function PastSessions({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        {/*<IconButton />*/}
        <IconButton
          icon="arrow-left"
          color={Colors.blue500}
          size={30}
          onPress={() => navigation.goBack()}
        />
        <Title style={{fontSize: 30}}>Past Sessions</Title>
      </View>

      <FlatList
        data={sessions}
        renderItem={({item}) => {
          return <SessionCard session={item}/>
        }}
      />
    </SafeAreaView>
  );
}


export default PastSessions;