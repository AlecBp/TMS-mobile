import React from "react";

import { ScrollView, View, Text, KeyboardAvoidingView  } from "react-native";
import { Avatar, Badge, Card, Colors, IconButton, Title, TextInput, Button } from "react-native-paper";
import { styles } from "./style";

// dummy data
const subjects = ["Science Lv.1", "Math Lv.1"];
const students = ["Andrew Rudder", "Alec Pagliarussi", "Rafael Afonso", "Suho Kang"];

import TutorCard from "../../components/TutorCard";
import StudentCard from "../../components/StudentCard";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

// @ts-ignore
const SessionDetails = ({ navigation }) => {
  const fontSize = 17;
  return (
    <KeyboardAvoidingView
      behavior="padding"
    >
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
        <PageTitle 
        firstLetter1="S" restOfWord1="ession" 
        firstLetter2="D" restOfWord2="etails"
        />
        </View>

        <View>
          <Card>
            <Card.Content>
              <View style={styles.spaceAround}>
                <Title style={{ fontSize }}>Tue. Nov 10</Title>
                <Title style={{ fontSize }}>4:00PM - 6:00PM</Title>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Title style={{ fontSize }}>Subjects: </Title>
                {subjects.map((subject: any, i) => (
                  <View key={i}>
                    <Text style={styles.badge}>{subject}</Text>
                  </View>
                ))}
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Title style={{ fontSize }}>Location: </Title>
                <Text style={{ fontSize }}>{"Bloor Collegiate Institute"}</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Title style={{ fontSize }}>Tutor: </Title>
                <Text style={{ fontSize }}>{"John Doe"}</Text>
              </View>

              <Title style={{ fontSize }}>There are {students.length} students in the session</Title>
            </Card.Content>
          </Card>

          <Title style={styles.title}>Tutor</Title>
          <TutorCard />

          <Title style={styles.title}>Students</Title>
          {students.map((student, i) => {
            return (
              <View key={i} style={{ marginVertical: 10 }}>
                <StudentCard student={student} />
              </View>
            );
          })}

          <Title style={styles.title}>Notes</Title>
          <TextInput mode="outlined" multiline={true} label="Notes about the session" numberOfLines={5} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button mode="contained" onPress={() => console.log("Update session")}>
            Update
          </Button>
        </View>
        <View style={{height: 100}} />
      </ScrollView>
      <Footer />
    </KeyboardAvoidingView>
  );
}

export default SessionDetails;
