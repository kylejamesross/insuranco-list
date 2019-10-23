import React, { useContext, useCallback } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListContext from "../contexts/list-context";
import UserContext from "../contexts/user-context";

const RemoveButton = ({ id }) => {
  const { removeItem } = useContext(ListContext);
  const { user } = useContext(UserContext);

  const onClick = useCallback(() => removeItem(id, user), [
    id,
    user,
    removeItem
  ]);

  return (
    <IconButton onClick={onClick} aria-label="delete">
      <DeleteIcon fontSize="small" />
    </IconButton>
  );
};

export default RemoveButton;
