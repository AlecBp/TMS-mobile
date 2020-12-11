import React, { useContext } from "react";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Avatar } from "react-native-paper";

import SessionCard from "../../components/SessionCard";
import { TouchableOpacity } from "react-native";

// @ts-ignore
import { UserContext } from "./../../context/UserContext";

import { useSessionsQuery } from "../../graphql/generated/graphql";

import LoadingSpinner from "../../components/LoadingSpinner";
import PageContainer from "../../components/HOC/PageContainer";

const Home = () => {
  const navigation = useNavigation();
  const { state } = useContext(UserContext);

  const { loading, error, data } = useSessionsQuery();

  return (
    <>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>
          <Avatar.Image
            size={60}
            source={{
              uri: state?.user?.gravatar,
            }}
          />
        </TouchableOpacity>
      </View>

      {loading && (
        <LoadingSpinner text="Loading" size="large" color="#0000ff" />
      )}
      {!loading &&
        data?.sessions?.map((s: any) => {
          const { id, date, time, subjects, location }: any = s;
          return (
            <TouchableOpacity
              key={id}
              style={{ marginVertical: 10 }}
              onPress={() =>
                navigation.navigate("SessionDetails", { sessionId: s.id })
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
    </>
  );
};

export default PageContainer(Home);
