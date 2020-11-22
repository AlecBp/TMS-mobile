import React from "react";
import Apollo from "./src/components/Apollo";
import Root from "./src/components/Root";

// @ts-ignore
import { UserProvider } from "./src/context/UserContext";
import SessionDetails from "./src/pages/SessionDetails";

export default function App() {
  return (
    <UserProvider>
      <Apollo>
        {/*<Root />*/}
        <SessionDetails />
      </Apollo>
    </UserProvider>
  );
}
