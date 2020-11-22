import React from "react";

import { ScrollView, View, Text } from "react-native";
import { Avatar, Badge, Card, Colors, IconButton, Title, TextInput } from "react-native-paper";

import { styles } from "./style";

// dummy data
const subjects = ["Science Lv.1", "Math Lv.1"];
const students = ["Andrew Rudder", "Alec Pagliarussi", "Rafael Afonso", "Suho Kang"];

import TutorCard from "../../components/TutorCard";
import StudentCard from "../../components/StudentCard";

function SessionDetails() {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconButton
          icon="arrow-left"
          color={Colors.blue500}
          size={30}
          // onPress={() => navigation.goBack()}
          onPress={() => console.log("TEST")}
        />
        <Title style={{ fontSize: 30 }}>Session Details</Title>
      </View>

      <View style={{ marginHorizontal: 30 }}>
        <Card>
          <Card.Content>
            <View style={styles.spaceAround}>
              <Title>Tue.Nov 10</Title>
              <Title>4:00PM - 6:00PM</Title>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Title>Subjects: </Title>
              {subjects.map((subject: any, i) => (
                <Badge
                  visible={true}
                  key={i}
                  style={{
                    marginHorizontal: 5,
                    paddingHorizontal: 5,
                  }}
                >
                  {subject}
                </Badge>
              ))}
            </View>

            <Title>Location: {"Bloor Collegiate Institute"}</Title>

            <Title>Tutor: {"John Doe"}</Title>

            <Title>There are {4} students in the session</Title>
          </Card.Content>
        </Card>

        <Title style={styles.title}>Tutor</Title>
        <TutorCard />

        <Title style={styles.title}>Students</Title>
        {students.map((student) => {
          return (
            <View style={{ marginVertical: 10 }}>
              <StudentCard student={student} />
            </View>
          );
        })}

        <Title style={styles.title}>Notes</Title>
        <TextInput mode="outlined" multiline={true} label="Notes about the session" numberOfLines={5} />
      </View>

      <View style={{ height: 200 }}></View>
    </ScrollView>
  );
}

export default SessionDetails;
