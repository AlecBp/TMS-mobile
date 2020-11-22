import React, { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import { setAccessToken } from "../../auth/accessToken";
import Routes from "../Routes";
// @ts-ignore
import { UserContext, SET_ACCESS_TOKEN, CLEAR } from "./../../context/UserContext";

const BASE_URL: string = "http://192.168.0.160:4000";

const Root: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch(`${BASE_URL}/refresh_token`, {
      method: "POST",
      credentials: "include",
    }).then(async (x) => {
      const { ok, accessToken } = await x.json();
      if (ok) {
        setAccessToken(accessToken);
        dispatch({ type: SET_ACCESS_TOKEN, payload: { accessToken } });
      } else {
        setAccessToken("");
        dispatch({ type: CLEAR });
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Routes />;
};

export default Root;
