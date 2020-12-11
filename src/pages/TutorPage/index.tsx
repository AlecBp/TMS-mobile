import { Linking, View } from "react-native";
import {
  Title,
  Avatar,
  Paragraph,
  Switch,
  useTheme,
  Button,
} from "react-native-paper";
import React, { useContext } from "react";
import { styles } from "./style";
import SubjectCard from "../../components/SubjectCard";
import PageContainer from "../../components/HOC/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

// @ts-ignore
import { subjects } from "./subjects";
// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";
// @ts-ignore
import { ThemeContext } from "./../../context/ThemeContext";
// @ts-ignore
import { useUserQuery } from "../../graphql/generated/graphql";

import { setAccessToken } from "../../auth/accessToken";

import { Ionicons } from "@expo/vector-icons";

import { useLogoutMutation } from "../../graphql/generated/graphql";
import { TouchableOpacity } from "react-native-gesture-handler";

// @ts-ignore
const TutorPage = () => {
  const { state, dispatch } = useContext(UserContext);
  const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);
  const materialTheme = useTheme();

  const { data, loading, error } = useUserQuery({
    variables: {
      id: state?.user?.id,
    },
    skip: !state.user,
  });

  const [logout, { client }] = useLogoutMutation();

  const { secondaryBtn }: any = useTheme();

  const logoutProcedure = async () => {
    setAccessToken("");
    await logout();
    await client.clearStore();
    dispatch({ type: CLEAR });
  };

  if (loading) {
    return <LoadingSpinner text="Loading" size="large" color="#0000ff" />;
  }

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
        <View>
          <Button
            mode="outlined"
            onPress={logoutProcedure}
            style={[secondaryBtn, { height: 35, width: 190 }]}
          >
            Logout
          </Button>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row-reverse",
            alignItems: "center",
          }}
        >
          <Switch value={materialTheme.dark} onValueChange={toggleDarkTheme} />
          {
            <Ionicons
              name={`${isDarkTheme ? "md-moon" : "ios-sunny"}`}
              size={24}
              style={{ marginHorizontal: 10 }}
              color={`${isDarkTheme ? "white" : "black"}`}
            />
          }
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginBottom: 25,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Avatar.Image size={100} source={{ uri: state?.user?.gravatar }} />

        <View
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: -10,
            left: 65,
            backgroundColor: isDarkTheme ? "white" : "black",
            opacity: 0.75,
            borderRadius: 50,
            padding: 0,
            height: 40,
            width: 40,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://en.gravatar.com/support/activating-your-account/"
              )
            }
          >
            <Ionicons
              name="ios-camera"
              size={30}
              color={!isDarkTheme ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>
        <Title style={{ marginLeft: 15, fontSize: 22 }}>
          {state.user.firstName} {state.user.lastName}
        </Title>
      </View>

      <Paragraph style={styles.bodyParagraph}>{data?.user?.bio}</Paragraph>

      <Title style={{ fontSize: 25, marginBottom: 10, textAlign: "center" }}>
        Subjects
      </Title>

      <View style={{ paddingHorizontal: 0 }}>
        {subjects.map((subject: any, i: any) => {
          return (
            <View key={i} style={{ marginVertical: 5 }}>
              <SubjectCard subject={subject} />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default PageContainer(TutorPage);
