import { View } from "react-native";
import { Avatar, Card, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useContext } from "react";
import { styles } from "./style";

// @ts-ignore
import { UserContext, CLEAR } from "./../../context/UserContext";

import { useNavigation } from "@react-navigation/native";

const TutorCard = (props: any) => {
  const { state, dispatch } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("TutorPage")}>
      <Card>
        <Card.Content style={styles.spaceBetween}>
          <Avatar.Image size={50} source={{ uri: state?.user?.gravatar }} />
          <Title>{"John Doe"}</Title>
          <Title>(Tutor)</Title>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default TutorCard;
