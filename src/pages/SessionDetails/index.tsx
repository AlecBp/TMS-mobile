import React from "react";

import {ScrollView, View, Text} from "react-native";
import {Avatar, Badge, Card, Colors, IconButton, Title, TextInput} from "react-native-paper";

import {styles} from "./style";

// dummy data
const subjects = ["Science Lv.1", "Math Lv.1"];
const students = ["Andrew Rudder", "Alec Pagliarussi", "Rafael Afonso", "Suho Kang"];

import TutorCard from "../../components/TutorCard";
import StudentCard from "../../components/StudentCard";
import Footer from "../../components/Footer";

// @ts-ignore
function SessionDetails({navigation}) {
  return (
    <View>


      <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <IconButton
            icon="arrow-left"
            color={Colors.blue500}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Title style={{fontSize: 30}}>Session Details</Title>
        </View>

        <View>
          <Card>
            <Card.Content>
              <View style={styles.spaceAround}>
                <Title>Tue.Nov 10</Title>
                <Title>4:00PM - 6:00PM</Title>
              </View>

              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Title>Subjects: </Title>
                {subjects.map((subject: any, i) => (
                  <View key={i}>
                    <Text style={styles.badge}>{subject}</Text>
                  </View>
                ))}
              </View>

              <Title>Location: {"Bloor Collegiate Institute"}</Title>

              <Title>Tutor: {"John Doe"}</Title>

              <Title>There are {4} students in the session</Title>
            </Card.Content>
          </Card>

          <Title style={styles.title}>Tutor</Title>
          <TutorCard/>

          <Title style={styles.title}>Students</Title>
          {students.map((student, i) => {
            return (
              <View key={i} style={{marginVertical: 10}}>
                <StudentCard student={student}/>
              </View>
            );
          })}

          <Title style={styles.title}>Notes</Title>
          <TextInput mode="outlined" multiline={true} label="Notes about the session" numberOfLines={5}/>
        </View>

        <View style={{height: 200}}></View>
      </ScrollView>
      <Footer/>
    </View>
  );
}

export default SessionDetails;
