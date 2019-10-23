import React, { useContext } from "react";
import hasListLoaded from "../selectors/list/has-list-loaded";
import EmailForm from "./forms/EmailForm";
import ListContext from "./contexts/list-context";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "./list/List";

const View = () => {
  const listContext = useContext(ListContext);

  const { isLoading: listIsLoading } = listContext;

  if (listIsLoading) {
    return <CircularProgress />;
  }

  return hasListLoaded(listContext) ? <List /> : <EmailForm />;
};

export default View;
