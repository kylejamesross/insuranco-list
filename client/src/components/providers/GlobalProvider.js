import React from "react";
import ListProvider from "./ListProvider";
import UserProvider from "./UserProvider";

const GlobalProvider = ({ children }) => (
  <UserProvider>
    <ListProvider>{children}</ListProvider>
  </UserProvider>
);

export default GlobalProvider;
