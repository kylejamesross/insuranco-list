import React, { useCallback } from "react";
import { TextField } from "@material-ui/core";

const NameInput = ({ setName, value }) => {
  const onChange = useCallback(event => setName(event.target.value), [setName]);
  return (
    <TextField
      id="outlined-name"
      label="Name"
      value={value}
      onChange={onChange}
      margin="normal"
      variant="outlined"
    />
  );
};

export default NameInput;
