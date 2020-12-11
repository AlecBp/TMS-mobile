import React, { useContext, useState } from "react";

import { View, Text, KeyboardAvoidingView } from "react-native";
import { Card, Title, TextInput, Button } from "react-native-paper";
import { styles } from "./style";

import { useRoute } from "@react-navigation/native";

import TutorCard from "../../components/TutorCard";
import StudentCard from "../../components/StudentCard";

import PageContainer from "../../components/HOC/PageContainer";
import {
  useSessionQuery,
  useEditNotesMutation,
  useEditAttendanceMutation,
} from "../../graphql/generated/graphql";
import LoadingSpinner from "../../components/LoadingSpinner";
// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";

import { useTheme } from "react-native-paper";

// @ts-ignore
const SessionDetails = () => {
  const { primaryBtn, font17 }: any = useTheme();
  const route = useRoute();

  const { sessionId }: any = route.params;

  const { loading, error, data } = useSessionQuery({
    variables: {
      id: sessionId,
    },
  });

  const { state } = useContext(UserContext);

  const [editNotes] = useEditNotesMutation();
  const [editAttendance] = useEditAttendanceMutation();
  const [note, setNote] = useState("");

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

  return (
    <View>
      <Card>
        <Card.Content>
          <View style={styles.spaceAround}>
            <Title style={font17}>{data?.session?.date}</Title>
            <Title style={font17}>{data?.session?.time}</Title>
          </View>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Title style={font17}>Subjects: </Title>
            {data?.session?.subjects?.map((subject: any, i) => (
              <View key={i}>
                <Text style={styles.badge}>
                  {subject.name} {subject.level}
                </Text>
              </View>
            ))}
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Title style={font17}>Location: </Title>
            <Text style={font17}>{data?.session?.location}</Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Title style={font17}>Tutor: </Title>
            <Text style={font17}>{state?.user?.firstName}</Text>
          </View>

          <Title style={font17}>
            There are {data?.session?.attendance?.length} students in the
            session
          </Title>
        </Card.Content>
      </Card>

      <Title style={styles.title}>Tutor</Title>
      <TutorCard />

      <Title style={styles.title}>Students</Title>
      {data?.session?.attendance?.map((obj) => {
        return (
          <View key={obj!.student!.id} style={{ marginVertical: 10 }}>
            <StudentCard
              markAttendance={markAttendance}
              student={obj?.student}
              isPresent={obj?.isPresent}
            />
          </View>
        );
      })}

      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={400}
        style={{ flex: 1 }}
        enabled
      >
        <Title style={styles.title}>Notes</Title>
        <TextInput
          mode="outlined"
          multiline={true}
          label="Notes about the session"
          numberOfLines={5}
          onChangeText={(note) => setNote(note)}
        />
        <View style={{ marginVertical: 10 }}>
          <Button mode="contained" onPress={handleSubmit} style={primaryBtn}>
            Update
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PageContainer(SessionDetails);

{
  /* <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} ></KeyboardAvoidingView> */
}
