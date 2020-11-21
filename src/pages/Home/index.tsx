import React from "react";
import {SafeAreaView, View, Text, FlatList} from "react-native";

import {Card, Title, Paragraph, Avatar, Button, Badge} from 'react-native-paper';
import {styles} from "./style";

// import sessions from "./sessions.json";
import {sessions} from "./sessions"
import SessionCard from "../../components/SessionCard"

function Home() {

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
        <Button mode="outlined">See Past Sessions</Button>
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