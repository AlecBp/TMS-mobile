import { Card, Title } from "react-native-paper";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import React from "react";

const SessionCard: React.FC<{
  date: string;
  time: string;
  subjects: any;
  location: string;
}> = ({ date, time, subjects, location }) => {
  return (
    <Card>
      <Card.Content>
        <View style={styles.spaceBetween}>
          <Title style={{ fontSize: 15 }}>Date: {date}</Title>
          <Title style={{ fontSize: 15 }}>{time}</Title>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Title style={{ fontSize: 15 }}>Subjects: </Title>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {subjects.map((subject: any, i: number) => (
              <View key={i}>
                <Text style={styles.badge}>
                  {subject.name} {subject.level}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Title style={{ fontSize: 15 }}>Location: {location}</Title>
      </Card.Content>
    </Card>
  );
};

export default SessionCard;
