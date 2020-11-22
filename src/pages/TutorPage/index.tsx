import {View} from "react-native";
import {Colors, IconButton, Title, Avatar, Paragraph} from "react-native-paper";
import React from "react";
import {styles} from "./style";
import {ScrollView} from "react-native"
import SubjectCard from "../../components/SubjectCard"

import {subjects} from "./subjects"

// @ts-ignore
function TutorPage({navigation}) {
  return (
    <View>
      <ScrollView style={styles.container}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <IconButton
            icon="arrow-left"
            color={Colors.blue500}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Title style={{fontSize: 30}}>Tutor</Title>
        </View>

        <View>
          <View style={styles.iconImage}>
            <Avatar.Text size={200} label="XD"/>
          </View>

          <Paragraph style={styles.bodyParagraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>


          <Title style={{fontSize: 25, marginBottom: 10}}>Subjects</Title>
          <View style={{paddingHorizontal: 40}}>
            {
              subjects.map((subject: any) => <SubjectCard subject={subject} styles={{marginHorizontal: 10}}/>)
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default TutorPage;