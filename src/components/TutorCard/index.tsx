import {View} from "react-native";
import {Avatar, Card, Title} from "react-native-paper";
import {TouchableOpacity} from "react-native-gesture-handler";
import React, { useContext } from "react";
import {styles} from "./style";

import { UserContext, CLEAR } from "./../../context/UserContext";

import {useNavigation} from "@react-navigation/native"; 

const TutorCard = (props: any) => {
  const { state, dispatch } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>
      <Card>
        <Card.Content style={styles.spaceBetween}>
          <Avatar.Text size={50} label={`${state?.user?.firstName[0] + state?.user?.lastName[0]}`} />
          <Title>{"John Doe"}</Title>
          <Title>(Tutor)</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity> 
  )
}

export default TutorCard;
