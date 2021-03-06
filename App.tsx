import React from "react";
import { Apollo } from "./src/components/Apollo";
import Root from "./src/components/Root";

// @ts-ignore
import { UserProvider } from "./src/context/UserContext";
// @ts-ignore
import { ThemeProvider } from "./src/context/ThemeContext";

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Apollo>
          <Root />
        </Apollo>
      </ThemeProvider>
    </UserProvider>
  );
}
