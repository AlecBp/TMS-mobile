import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { IconButton, Title, Colors } from "react-native-paper";
// @ts-ignore
import { sessions } from "../Home/sessions.js";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";

// @ts-ignore
function PastSessions({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Title style={{ fontSize: 25 }}>Past Sessions</Title>
      </View>

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={sessions}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => navigation.navigate("SessionDetails")}>
            <SessionCard session={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default PastSessions;
