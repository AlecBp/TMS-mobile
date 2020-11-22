import jwtDecode from "jwt-decode";
import React, { createContext, useReducer } from "react";

const initialState = {
  accessToken: null,
  user: null,
};

const CLEAR = "CLEAR";
const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

const userFromToken = (token) => {
  const { firstName, lastName, email, userId, role } = jwtDecode(token);
  return { firstName, lastName, email, id: userId, role };
};

const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR:
      return initialState;
    case SET_ACCESS_TOKEN:
      const user = userFromToken(action.payload.accessToken);
      return { ...state, user, accessToken: action.payload.accessToken };
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
