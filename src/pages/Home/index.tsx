import React, { useContext } from "react";
import { ScrollView, View, FlatList } from "react-native";

import { Title, Avatar, Button } from "react-native-paper";
import { styles } from "./style";

// @ts-ignore
import { sessions } from "./sessions";
import SessionCard from "../../components/SessionCard";
import { TouchableOpacity } from "react-native";

// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";
import { setAccessToken } from "../../auth/accessToken";
import { useLogoutMutation, useSessionsQuery } from "../../graphql/generated/graphql";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = ({ navigation }: any) => {
  const { state, dispatch } = useContext(UserContext);
  const [logout] = useLogoutMutation();

  const { loading, error, data } = useSessionsQuery();

  const logoutProcedure = async () => {
    setAccessToken("");
    await logout();
    dispatch({ type: CLEAR });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.spaceAround}>
          <PageTitle firstLetter1="U" restOfWord1="pcoming" firstLetter2="S" restOfWord2="ession" />

          <TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>
            <Avatar.Text size={60} label={`${state?.user?.firstName[0] + state?.user?.lastName[0]}`} />
          </TouchableOpacity>
        </View>

        <View style={[styles.spaceAround, { marginVertical: 20 }]}>
          <Button mode="outlined" onPress={() => navigation.navigate("PastSessions")}>
            See Past Sessions
          </Button>
          <Button mode="contained" onPress={logoutProcedure}>
            Logout
          </Button>
        </View>

        {loading && <LoadingSpinner text="Loading" size="large" color="#0000ff" />}
        {!loading &&
          data!.sessions!.map((s) => {
            const { id, date, time, subjects, location }: any = s;
            return (
              <TouchableOpacity
                key={id}
                style={{ marginVertical: 10 }}
                onPress={() => navigation.navigate("SessionDetails")}
              >
                <SessionCard date={date} location={location} time={time} subjects={subjects} />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <Footer />
    </View>
  );
};

export default Home;
