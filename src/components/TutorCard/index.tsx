import {View} from "react-native";
import {Avatar, Card, Title} from "react-native-paper";
import {TouchableOpacity} from "react-native-gesture-handler";
import React from "react";
import {styles} from "./style";

const TutorCard = (props: any) => {
  return (
    <Card>
      <Card.Content style={styles.spaceBetween}>

        {/*<TouchableOpacity onPress={() => console.log("GO TO TUTOR PAGE")}>*/}
        {/*  <Avatar.Text size={60} label="XD" />*/}
        {/*</TouchableOpacity>*/}

        <Avatar.Text size={50} label="XD" />
        <Title>{"John Doe"}</Title>
        <Title>(Tutor)</Title>
      </Card.Content>
    </Card>
  )
}

export default TutorCard;
