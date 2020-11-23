import React from "react";
import {FlatList, TouchableOpacity, View, ScrollView} from "react-native";
import {styles} from "./style";
import {IconButton, Title, Colors} from "react-native-paper";
// @ts-ignore
import {sessions} from "../Home/sessions.js";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";

// @ts-ignore
const PastSessions = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.title}>
          <Title style={{fontSize: 25}}>Past Sessions</Title>
        </View>

        {
          sessions.map((session: { id: string | number | null | undefined; }) => (
            <TouchableOpacity key={session.id} style={{marginVertical: 10}}
                              onPress={() => navigation.navigate("SessionDetails")}>
              <SessionCard session={session}/>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <Footer />
    </View>
  );
}

export default PastSessions;
