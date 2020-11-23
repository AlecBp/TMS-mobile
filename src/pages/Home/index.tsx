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
import { useLogoutMutation } from "../../graphql/generated/graphql";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";

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
      <PageTitle 
        firstLetter1="U" restOfWord1="pcoming" 
        firstLetter2="S" restOfWord2="ession"
        />
        
        

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

      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={sessions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={{ marginVertical: 10 }} onPress={() => navigation.navigate("SessionDetails")}>
              <SessionCard session={item} />
            </TouchableOpacity>
          );
        }}
      />
      <Footer />
    </View>
  );
};

export default Home;
