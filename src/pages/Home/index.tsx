import React, { useContext } from "react";
import { SafeAreaView, View, FlatList } from "react-native";

import { Title, Avatar, Button } from "react-native-paper";
import { styles } from "./style";

// @ts-ignore
import { sessions } from "./sessions";
import SessionCard from "../../components/SessionCard";
import { TouchableOpacity } from "react-native-gesture-handler";

// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";
import { setAccessToken } from "../../auth/accessToken";
import { useLogoutMutation } from "../../graphql/generated/graphql";

const Home = ({ navigation }: any) => {
  const { state, dispatch } = useContext(UserContext);
  const [logout] = useLogoutMutation();

  const logoutProcedure = async () => {
    setAccessToken("");
    await logout();
    dispatch({ type: CLEAR });
  };

  return (
    <View style={styles.container}>
      <View style={styles.spaceAround}>
        <View>
          <Title style={styles.title}>Upcoming</Title>
          <Title style={styles.title}>Session</Title>
        </View>

<<<<<<< HEAD
        {/*<TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>*/}
          <Avatar.Text size={60} label="XD" />
        {/*</TouchableOpacity>*/}
=======
        <TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>
          <Avatar.Text size={60} label={state?.user?.firstName[0] + state?.user?.lastName[0]} />
        </TouchableOpacity>
>>>>>>> 57e9f6dde2f6ea252ebaad9c1bc4343071dfa00d
      </View>

      <View style={[styles.spaceAround, { marginVertical: 20 }]}>
        <Button mode="outlined" onPress={() => navigation.navigate("PastSessions")}>
          See Past Sessions
        </Button>
        <Button mode="contained" onPress={logoutProcedure}>
          Logout
        </Button>
      </View>

      <FlatList
        // keyExtractor={(item) => item.id}
        data={sessions}
        renderItem={({ item }) => {
          return <SessionCard session={item} />;
        }}
      />
    </View>
  );
};

export default Home;
