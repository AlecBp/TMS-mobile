import React from "react";
import {FlatList, TouchableOpacity, View, ScrollView} from "react-native";
import {styles} from "./style";
import {IconButton, Title, Colors} from "react-native-paper";
// @ts-ignore
import {sessions} from "../Home/sessions.js";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

// @ts-ignore
function PastSessions({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.title}> 
      <PageTitle 
        firstLetter1="P" restOfWord1="ast" 
        firstLetter2="S" restOfWord2="essions"
        
        />
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
