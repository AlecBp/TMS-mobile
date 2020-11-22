import {Card, Title} from "react-native-paper";
import {View, Text, ScrollView} from "react-native";
import {styles} from "./style";
import React from "react";

const SessionCard = (props: any) => {
  const {date, time, subjects, location} = props.session;
  return (
    <Card>
      <Card.Content>
        <View style={styles.spaceBetween}>
          <Title>Date: {date}</Title>
          <Title>{time}</Title>
        </View>

        <View style={{flexDirection: "row"}}>
          <Title>Subjects: </Title>
          <View style={{flexDirection: "row", alignItems: "center", }}>
            {subjects.map((subject: any, i: any) => (
              <View>
                <Text style={styles.badge}>{subject}</Text>
              </View>
            ))}
          </View>
        </View>

        <Title>Location: {location}</Title>
      </Card.Content>
    </Card>
  )
};

export default SessionCard;