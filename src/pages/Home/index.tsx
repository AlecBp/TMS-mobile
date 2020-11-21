import React from "react";
import {SafeAreaView, View, FlatList} from "react-native";

import {Title, Avatar, Button} from 'react-native-paper';
import {styles} from "./style";

// import sessions from "./sessions.json";
import {sessions} from "./sessions"
import SessionCard from "../../components/SessionCard"

// @ts-ignore
function Home({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.spaceAround}>
        <View>
          <Title style={styles.title}>Upcoming</Title>
          <Title style={styles.title}>Session</Title>
        </View>

        <Avatar.Text size={60} label="XD"/>
      </View>

      <View style={[styles.spaceAround, {marginTop: 10}]}>
        <Button mode="outlined" onPress={() => navigation.navigate("PastSessions")}>See Past Sessions</Button>
        <Button mode="contained">Logout</Button>
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


export default Home;