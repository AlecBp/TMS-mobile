import React from "react";
import { FlatList, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style";
import { IconButton, Title, Colors } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

// @ts-ignore
import { sessions } from "../Home/sessions.js";
import SessionCard from "../../components/SessionCard";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import { useSessionsQuery } from "../../graphql/generated/graphql";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageContainer from "../../components/HOC/PageContainer";

import ErrorMsg from "../../components/ErrorMsg";

// @ts-ignore
const PastSessions = () => {
  const navigation = useNavigation();
  const { loading, error, data } = useSessionsQuery();

  return (
    <>
      {loading && (
        <LoadingSpinner text="Loading" size="large" color="#0000ff" />
      )}

      {!loading &&
        data?.sessions?.map((s) => {
          const { id, date, time, subjects, location }: any = s;
          return (
            <TouchableOpacity
              key={id}
              style={{ marginVertical: 10 }}
              onPress={() =>
                navigation.navigate("SessionDetails", { sessionId: id })
              }
            >
              <SessionCard
                date={date}
                location={location}
                time={time}
                subjects={subjects}
              />
            </TouchableOpacity>
          );
        })}

        {!loading && data?.sessions?.length === 0 && 
          <ErrorMsg msg="You have not had any session in the past" />
        }
    </>
  );
};

export default PageContainer(PastSessions);
