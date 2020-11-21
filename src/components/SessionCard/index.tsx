import {Badge, Card, Title} from "react-native-paper";
import {View} from "react-native";
import {styles} from "./style";
import React from "react";

const SessionCard = (props: any) => {
  const {date, time, subjects, location} = props.session;
  return (
    <Card>
      <Card.Content>
        <View style={styles.spaceAround}>
          <Title>Date: {date}</Title>
          <Title>{time}</Title>
        </View>

        <View style={styles.spaceAround}>
          <Title>Subjects: </Title>
          <View style={{flexDirection: "row"}}>
            {subjects.map((subject: any, i: number) => <Badge key={i} style={{marginHorizontal: 5, paddingHorizontal: 5}}>{subject}</Badge>)}
          </View>
        </View>

        <View style={styles.spaceAround}>
          <Title>Location:</Title>
          <Title>{location}</Title>
        </View>
      </Card.Content>
    </Card>
  )
};

export default SessionCard;