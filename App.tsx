import React from "react";
import Apollo from "./src/components/Apollo";
// import { ApolloNative } from "./src/components/ApolloNative";
import Root from "./src/components/Root";
// @ts-ignore
import { UserProvider } from "./src/context/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Apollo>
        <Root />
      </Apollo>
    </UserProvider>
  );
}
