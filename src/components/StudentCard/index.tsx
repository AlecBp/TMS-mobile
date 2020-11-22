import {View} from "react-native";
import {Avatar, Card, Title, Checkbox} from "react-native-paper";
import {TouchableOpacity} from "react-native-gesture-handler";
import React, {useState} from "react";
import {styles} from "./style";

function StudentCard(props: any) {
  const {student} = props;
  const [attendance, setAttendance] = useState(true);

  return (
    <Card>
      <Card.Content style={styles.spaceBetween}>
        <Checkbox status={attendance ? 'checked' : 'unchecked'} onPress={() => setAttendance(!attendance)} />
        <Title style={{marginLeft: 20}}>{student}</Title>
      </Card.Content>
    </Card>
  )
}

export default StudentCard;