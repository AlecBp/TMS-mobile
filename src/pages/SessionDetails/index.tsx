import React, { useContext, useEffect, useState } from "react";

import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
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
  SessionQuery,
  SessionDocument,
} from "../../graphql/generated/graphql";
import LoadingSpinner from "../../components/LoadingSpinner";
// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";

import { useTheme } from "react-native-paper";
import SimpleToast from "react-native-simple-toast";

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
    editNotes({
      variables: { sessionId, notes: note },
      update: (store, { data }) => {
        const existingSessionData = store.readQuery<SessionQuery>({
          query: SessionDocument,
          variables: { id: sessionId },
        })?.session;

        console.log(existingSessionData);

        store.writeQuery<SessionQuery>({
          query: SessionDocument,
          variables: {
            id: data!.editNotes!.id,
          },
          data: {
            // IDK WHY THIS IS GIVING AN ERROR
            session: { ...existingSessionData, notes: data!.editNotes!.notes },
          },
        });
      },
    })
      .then((res) => {
        SimpleToast.show("Notes updated successfully");
      })
      .catch((err) => {
        console.log(err);
        SimpleToast.show("Error: Notes couldn't be updated");
      });
  };

  const handleCheckAttendance = (studentId: any, attendance: any) => {
    const student = data?.session?.attendance?.find(
      (att) => att!.student!.id === studentId
    )?.student;

    editAttendance({
      variables: { sessionId, studentId, status: attendance },
      update: (store, { data }) => {
        const sessionData = store.readQuery<SessionQuery>({
          query: SessionDocument,
          variables: { id: sessionId },
        });
        store.writeQuery<SessionQuery>({
          query: SessionDocument,
          variables: { id: sessionId },
          data: {
            session: {
              ...sessionData,
              attendance: sessionData?.session?.attendance?.map((att) => {
                if (att?.student?.id === studentId) {
                  return { ...att, isPresent: attendance };
                }
                return att;
              }),
            },
          },
        });
      },
    })
      .then((res) => {
        SimpleToast.show(
          `Attendance status updated for '${student!.firstName} ${
            student!.lastName
          }'`
        );
      })
      .catch((err) => {
        console.log(err);
        SimpleToast.show(
          `Error: Attendance status couldn't be updated for '${
            student!.firstName
          } ${student!.lastName}'`
        );
      });
  };

  useEffect(() => {
    if (data && data.session) {
      setNote(data?.session?.notes);
    }
  }, [loading]);

  if (loading) {
    return <LoadingSpinner text="Loading" size="large" color="#0000ff" />;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "position" : "padding"}
      enabled
    >
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

        <Title style={styles.title}>Notes</Title>

        <TextInput
          mode="outlined"
          multiline={true}
          label="Notes about the session"
          numberOfLines={5}
          onChangeText={(note) => setNote(note)}
          value={note}
        />
        <View style={{ marginVertical: 10 }}>
          <Button mode="contained" onPress={handleSubmit} style={primaryBtn}>
            Update
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PageContainer(SessionDetails);
