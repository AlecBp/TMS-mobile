import React, { useContext } from "react";

import { TokenRefreshLink } from "apollo-link-token-refresh";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  Observable,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import jwtDecode from "jwt-decode";
import { getAccessToken, setAccessToken } from "../../auth/accessToken";

// @ts-ignore
import {
  UserContext,
  SET_ACCESS_TOKEN,
  CLEAR,
} from "../../context/UserContext";
import getEnvVars from "../../../env";

// Inside of this file, we make use of a getter and setter to manipulate and read a token that is stored in memory as variable,
// we also keep the same token in state inside of the UserContext. The need of the first variable is due to the fact that after setting
// the state the value that we read right after might not be the one we just set because react "queus that update"
// By using a regular variable we are able to write and read the variable in sequence

const Apollo = (props: any) => {
  const { state, dispatch } = useContext(UserContext);

  const { graphqlUrl, refreshTokenUrl }: any = getEnvVars();

  const defaultOptions = {
    watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
    },
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  };

  const tokenRefreshLink = new TokenRefreshLink({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: () => {
      const token = state.accessToken;
      // const token = getAccessToken();

      if (!token) return true;

      try {
        // @ts-ignore
        const { exp } = jwtDecode(token);
        if (Date.now() >= exp * 1000) {
          return false;
        } else {
          return true;
        }
      } catch (err) {
        return false;
      }
    },
    fetchAccessToken: () => {
      return fetch(refreshTokenUrl, {
        method: "POST",
        credentials: "include",
      });
    },
    handleFetch: (accessToken) => {
      setAccessToken(accessToken);
      dispatch({
        type: SET_ACCESS_TOKEN,
        payload: { accessToken: accessToken },
      });
    },
    handleError: (err) => {
      console.warn("Refresh token is invalid, try to sign in again.");
      dispatch({ type: CLEAR });
      setAccessToken("");
    },
  });

  const requestLink = new ApolloLink(
    (operation, forward) =>
      new Observable((observer) => {
        let handle: any;
        Promise.resolve(operation)
          .then((operation) => {
            // const accessToken = state.accessToken;
            const accessToken = getAccessToken();
            if (accessToken) {
              operation.setContext({
                headers: {
                  authorization: `bearer ${accessToken}`,
                },
              });
            }
          })
          .then(() => {
            handle = forward(operation).subscribe({
              next: observer.next.bind(observer),
              error: observer.error.bind(observer),
              complete: observer.complete.bind(observer),
            });
          })
          .catch(observer.error.bind(observer));

        return () => {
          if (handle) handle.unsubscribe();
        };
      })
  );

  const client = new ApolloClient({
    link: ApolloLink.from([
      tokenRefreshLink,
      onError(({ graphQLErrors, networkError }) => {
        console.log(graphQLErrors);
        console.log(networkError);
      }),
      requestLink,
      new HttpLink({
        uri: graphqlUrl,
        credentials: "include",
      }),
    ]),
    // @ts-ignore
    defaultOptions,
    cache: new InMemoryCache({}),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default Apollo;
