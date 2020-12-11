import React, { useContext, useMemo } from "react";
import { ScrollView, View, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Title, Avatar, Button } from "react-native-paper";
import { styles } from "./style";

// @ts-ignore
import { sessions } from "./sessions";
import SessionCard from "../../components/SessionCard";
import { TouchableOpacity } from "react-native";

// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";

import {
  useLogoutMutation,
  useSessionsQuery,
} from "../../graphql/generated/graphql";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageContainer from "../../components/HOC/PageContainer";

import { useTheme } from "react-native-paper";

// import md5 from "react-native-md5";

const Home = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);


  const { primaryBtn, secondaryBtn } = useTheme();

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
          {/* <Avatar.Image
            size={60}
            source={ { uri: (`https://www.gravatar.com/avatar/${useMemo(() => md5.str_md5(state?.user?.email), [state?.user])}`)}}
          /> */}
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
