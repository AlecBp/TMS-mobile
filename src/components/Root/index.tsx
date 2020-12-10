import React, { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { setAccessToken } from "../../auth/accessToken";
import Routes from "../Routes";
// @ts-ignore
import {
  UserContext,
  SET_ACCESS_TOKEN,
  CLEAR,
} from "./../../context/UserContext";
import LoadingSpinner from "../LoadingSpinner";
import getEnvVars from "../../../env";

// const BASE_URL: string = "http://192.168.0.160:4000";

const Root: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const { dispatch } = useContext(UserContext);

  useEffect(() => {
    fetch(getEnvVars().refreshTokenUrl, {
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
    return <LoadingSpinner text="Loading" size="large" color="#0000ff" />;
  }

  return <Routes />;
};

export default Root;
