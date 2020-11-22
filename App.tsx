import React from "react";
import Apollo from "./src/components/Apollo";
import Root from "./src/components/Root";

import Footer from "./src/components/Footer";
import LoginPage from "./src/pages/LoginPage";


// @ts-ignore
import { UserProvider } from "./src/context/UserContext";
import Routes from "./src/components/Routes"

export default function App() {
  return (
    <UserProvider>
      <Apollo>
        <Root />
      </Apollo>
    </UserProvider>
  );
}
