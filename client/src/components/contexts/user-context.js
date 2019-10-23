import { createContext } from "react";

const UserContext = createContext({
  user: {},
  setUser: () => {},
  setEmail: () => {}
});

export default UserContext;
