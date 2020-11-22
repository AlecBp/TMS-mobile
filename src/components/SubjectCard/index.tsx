import {View, Text} from "react-native";
import React from "react";
import {styles} from "./style"
import {Avatar, Title} from "react-native-paper";

const SubjectCard = (props) => {
  const {subject: {subject, level}} = props;
  return (
    <View style={styles.spaceAround}>
      <Avatar.Icon size={30} icon="pencil" />
      <Title style={styles.textSize}>{subject}</Title>
      <Title>{level}</Title>
    </View>
  )
}

export default SubjectCard;