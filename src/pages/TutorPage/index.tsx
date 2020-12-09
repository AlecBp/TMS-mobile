import {View} from "react-native";
import {Colors, IconButton, Title, Avatar, Paragraph} from "react-native-paper";
import React, {useContext} from "react";
import {styles} from "./style";
import {ScrollView} from "react-native";
import SubjectCard from "../../components/SubjectCard";
import Footer from "../../components/Footer";
import PageTitle from "../../components/PageTitle";
import PageContainer from "../../components/HOC/PageContainer";

// @ts-ignore
import {subjects} from "./subjects";
import { useNavigation } from "@react-navigation/native";
// import {UserContext,} from "../../context/UserContext";

// @ts-ignore
const TutorPage = () => {
  const navigation = useNavigation
  // const {state, dispatch} = useContext(UserContext);
  return (
    <>
      <View style={styles.iconImage}>
        {/* <Avatar.Text size={175} label="XD" /> */}
        <Avatar.Text size={100} label={`J`}/>
        {/*<Avatar.Text size={100} label={`${state?.user?.firstName[0] + state?.user?.lastName[0]}`}/>*/}
      </View>

      <Paragraph style={styles.bodyParagraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
        Aldus PageMaker including versions of Lorem Ipsum.
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
