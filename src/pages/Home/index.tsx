import React, { useContext } from "react";
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
import { setAccessToken } from "../../auth/accessToken";
import {
  useLogoutMutation,
  useSessionsQuery,
} from "../../graphql/generated/graphql";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import LoadingSpinner from "../../components/LoadingSpinner";
import PageContainer from "../../components/HOC/PageContainer";

import { useTheme } from "react-native-paper";

const Home = () => {
  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  const [logout, { client }] = useLogoutMutation();

  const { primaryBtn, secondaryBtn } = useTheme();

  const { loading, error, data } = useSessionsQuery();

  const logoutProcedure = async () => {
    setAccessToken("");
    await logout();
    await client.clearStore();
    dispatch({ type: CLEAR });
  };

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
          <Avatar.Text
            size={60}
            label={`${state?.user?.firstName[0] + state?.user?.lastName[0]}`}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.spaceBetween}>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate("PastSessions")}
          style={[secondaryBtn, { height: 35, width: 190 }]}
        >
          See Past Sessions
        </Button>
        <Button
          mode="contained"
          onPress={logoutProcedure}
          style={[primaryBtn, { height: 35, width: 190 }]}
        >
          Logout
        </Button>
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
