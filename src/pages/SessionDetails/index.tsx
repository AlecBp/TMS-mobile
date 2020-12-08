import React, { useContext, useState } from "react";

import { ScrollView, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import { Avatar, Badge, Card, Colors, IconButton, Title, TextInput, Button } from "react-native-paper";
import { styles } from "./style";

// dummy data
const subjects = ["Science Lv.1", "Math Lv.1"];
const students = ["Andrew Rudder", "Alec Pagliarussi", "Rafael Afonso", "Suho Kang"];

import TutorCard from "../../components/TutorCard";
import StudentCard from "../../components/StudentCard";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import PageContainer from "../../components/HOC/PageContainer";
import { useSessionQuery, useEditNotesMutation, useEditAttendanceMutation } from "../../graphql/generated/graphql";
import LoadingSpinner from "../../components/LoadingSpinner";
// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";

// @ts-ignore
const SessionDetails = ({ navigation, route }) => {
  const fontSize = 17;
  const { sessionId } = route.params;

  const { loading, error, data } = useSessionQuery({
    variables: {
      id: sessionId,
    },
  });

  const { state, dispatch } = useContext(UserContext);

  const [editNotes] = useEditNotesMutation();
  const [editAttendance] = useEditAttendanceMutation();
  const [note, setNote] = useState("");
  const [sessionData, setSessionData] = useState();

  const markAttendance = (studentId: string, isPresent: boolean) => {
    handleCheckAttendance(studentId, isPresent);
  };

  const handleSubmit = () => {
    editNotes({ variables: { sessionId, notes: note } });
  };

  const handleCheckAttendance = (studentId: any, attendance: any) => {
    editAttendance({ variables: { sessionId, studentId, status: attendance } });
  };

  if (loading) {
    return <LoadingSpinner text="Loading" size="large" color="#0000ff" />;
  }

  console.log(data);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <ScrollView>
        <View>
          <Card>
            <Card.Content>
              <View style={styles.spaceAround}>
                {/* <Title style={{ fontSize }}>Tue. Nov 10</Title>
                <Title style={{ fontSize }}>4:00PM - 6:00PM</Title> */}
                <Title style={{ fontSize }}>{data?.session?.date}</Title>
                <Title style={{ fontSize }}>{data?.session?.time}</Title>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Title style={{ fontSize }}>Subjects: </Title>
                {data?.session?.subjects?.map((subject: any, i) => (
                  <View key={i}>
                    <Text style={styles.badge}>
                      {subject.name} {subject.level}
                    </Text>
                  </View>
                ))}
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Title style={{ fontSize }}>Location: </Title>
                <Text style={{ fontSize }}>{data?.session?.location}</Text>
              </View>

              <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Title style={{ fontSize }}>Tutor: </Title>
                <Text style={{ fontSize }}>{state?.user?.firstName}</Text>
              </View>

              <Title style={{ fontSize }}>There are {data?.session?.attendance?.length} students in the session</Title>
            </Card.Content>
          </Card>

          <Title style={styles.title}>Tutor</Title>
          <TutorCard />

          <Title style={styles.title}>Students</Title>
          {data?.session?.attendance?.map((obj) => {
            return (
              <View key={obj!.student!.id} style={{ marginVertical: 10 }}>
                <StudentCard markAttendance={markAttendance} student={obj?.student} isPresent={obj?.isPresent} />
              </View>
            );
          })}

          <Title style={styles.title}>Notes</Title>
          <TextInput
            mode="outlined"
            multiline={true}
            label="Notes about the session"
            numberOfLines={5}
            onChangeText={(note) => setNote(note)}
          />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Button mode="contained" onPress={handleSubmit}>
            Update
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default PageContainer(SessionDetails);
