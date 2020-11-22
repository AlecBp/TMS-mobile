import {View, Text} from "react-native";
import React from "react";
import {styles} from "./style"
import {Avatar, Card, Checkbox, Title} from "react-native-paper";

const SubjectCard = (props: any) => {
  const {subject: {subject, level}} = props;
  return (
    <Card>
      <Card.Content style={styles.spaceBetween}>
        <Avatar.Icon size={30} icon="pencil"/>
        <Title style={styles.textSize}>{subject}</Title>
        <Title>{level}</Title>
      </Card.Content>
    </Card>
  )
}

export default SubjectCard;
