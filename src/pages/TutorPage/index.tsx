import {View} from "react-native";
import {Colors, IconButton, Title, Avatar, Paragraph} from "react-native-paper";
import React, {useContext, useState} from "react";
import {styles} from "./style";
import {ScrollView} from "react-native";
import SubjectCard from "../../components/SubjectCard";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import PageContainer from "../../components/HOC/PageContainer";
import LoadingSpinner from "../../components/LoadingSpinner";

// @ts-ignore
import {subjects} from "./subjects";
import { useNavigation } from "@react-navigation/native";

// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";
// @ts-ignore
import { useUserQuery } from "../../graphql/generated/graphql";

 
// @ts-ignore
const TutorPage = () => {
  const navigation = useNavigation
  const {state, dispatch} = useContext(UserContext);
  const {data, loading, error} = useUserQuery({
    variables: {
      id: state.user.id
    }
  })

  if(loading) {
    return <LoadingSpinner text="Loading" size="large" color="#0000ff" />
  }

  // alert(JSON.stringify(data));
  return (
    <>
      <View style={styles.iconImage}>
        <Avatar.Text size={100} label={`${state?.user?.firstName[0] + state?.user?.lastName[0]}`}/>
      </View>

      <Paragraph style={styles.bodyParagraph}>
        {data?.user?.bio}
      </Paragraph>

      <Title style={{fontSize: 25, marginBottom: 10, textAlign: "center"}}>Subjects</Title>

      <View style={{paddingHorizontal: 0}}>
        {subjects.map((subject: any, i: any) => {
          return (
            <View key={i} style={{marginVertical: 5}}>
              <SubjectCard subject={subject}/>
            </View>
          );
        })}
      </View>
    </>
  );
}

export default PageContainer(TutorPage);
