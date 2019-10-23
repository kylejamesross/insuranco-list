import { createContext } from "react";

const ListContext = createContext({
  list: null,
  setList: () => {},
  loadList: () => {}
});

export default ListContext;
