import jwtDecode from "jwt-decode";
import React, { createContext, useReducer } from "react";

const initialState = {
  accessToken: null,
  user: null,
};

const CLEAR = "CLEAR";
const SET_USER_AND_ACCESS_TOKEN = "SET_USER_AND_ACCESS_TOKEN";
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";
const SET_USER = "SET_USER";

const userFromToken = (token) => {
  const { firstName, lastName, email, userId, role } = jwtDecode(token);
  return { firstName, lastName, email, id: userId, role };
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return initialState;
    case SET_USER_AND_ACCESS_TOKEN:
      return { ...state, accessToken: action.payload.accessToken, user: action.payload.user };
    case SET_ACCESS_TOKEN:
      const user = userFromToken(action.payload.accessToken);
      return { ...state, user, accessToken: action.payload.accessToken };
    case SET_USER:
      return { ...state, user: action.payload.user };
    default:
      return;
  }
};

const UserContext = createContext(initialState);

const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ state, dispatch }}>{props.children}</UserContext.Provider>;
};

export { UserContext, UserProvider, CLEAR, SET_ACCESS_TOKEN };
