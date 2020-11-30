import { View } from "react-native";
import { Avatar, Card, Title, Checkbox } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";
import { styles } from "./style";

const StudentCard = ({ student, isPresent, markAttendance }: any) => {
  return (
    <Card>
      <Card.Content style={styles.spaceBetween}>
        <Checkbox
          status={isPresent ? "checked" : "unchecked"}
          onPress={() => markAttendance(student.id, !isPresent)}
        />
        <Title style={{ marginLeft: 20 }}>
          {student.firstName} {student.lastName}
        </Title>
      </Card.Content>
    </Card>
  );
};

export default StudentCard;
