import React, { useState } from "react";
import ListContext from "../contexts/list-context";
import uuid from "uuid/v4";
import postList from "../actions/db/post-list";
import getList from "../actions/db/get-list";
import deleteListItem from "../actions/db/delete-list-item";
import getIn from "lodash-es/get";

const { Provider: ListProviderComponent } = ListContext;

const ListProvider = ({ children }) => {
  const [list, setList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const loadList = email => {
    const onSuccess = response => {
      const list = getIn(response, ["data", "data", "children"], []);
      setList(list);
      setIsLoading(false);
    };
    const onError = () => {
      setList(null);
      setIsLoading(false);
    };
    setIsLoading(true);
    getList(email, onSuccess, onError);
  };

  const removeItem = (id, user) => {
    const index = list.findIndex(({ id: ID }) => ID === id);
    if (index !== -1) {
      const { _id: id } = list[index];
      const modifiedList = [...list.slice(0, index), ...list.slice(index + 1)];
      setList(modifiedList);
      deleteListItem(user, id);
    }
  };

  const addItem = (item, user) => {
    const id = uuid();
    const modifiedList = [...list, { ...item, id }];
    setList(modifiedList);
    postList(modifiedList, user);
  };

  const value = { list, loadList, isLoading, removeItem, addItem };

  return (
    <ListProviderComponent value={value}>{children}</ListProviderComponent>
  );
};

export default ListProvider;
