import React, { useState } from "react";
import UserContext from "../contexts/user-context";

const { Provider: UserProviderComponent } = UserContext;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const setEmail = email => setUser({ ...user, email });

  const value = { user, setUser, setEmail };

  return (
    <UserProviderComponent value={value}>{children}</UserProviderComponent>
  );
};

export default UserProvider;
