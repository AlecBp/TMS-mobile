import React from "react";
import {View, FlatList } from "react-native";

import { Title, Avatar, Button } from "react-native-paper";
import { styles } from "./style";

// import sessions from "./sessions.json";
// @ts-ignore
import { sessions } from "./sessions";
import SessionCard from "../../components/SessionCard";
import { TouchableOpacity } from "react-native-gesture-handler";

// @ts-ignore
function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.spaceAround}>
        <View>
          <Title style={styles.title}>Upcoming</Title>
          <Title style={styles.title}>Session</Title>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>
          <Avatar.Text size={60} label="XD" />
        </TouchableOpacity>
      </View>

      <View style={[styles.spaceAround, { marginVertical: 20 }]}>
        <Button mode="outlined" onPress={() => navigation.navigate("PastSessions")}>See Past Sessions</Button>
        <Button mode="contained" onPress={() => console.log("LOGOUT")}>Logout</Button>
      </View>

      <FlatList
        // keyExtractor={(item) => item.id}
        data={sessions}
        renderItem={({ item }) => {
          return <SessionCard session={item} />;
        }}
      />
    </View>
  );
}

export default Home;
