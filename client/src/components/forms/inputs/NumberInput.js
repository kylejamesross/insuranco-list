import React, { useCallback } from "react";
import { TextField } from "@material-ui/core";

const NumberInput = ({ value, setValue }) => {
  const onChange = useCallback(event => setValue(event.target.value), [
    setValue
  ]);
  return (
    <TextField
      id="outlined-number"
      label="Number"
      value={value}
      onChange={onChange}
      type="number"
      InputLabelProps={{ shrink: true }}
      margin="normal"
      variant="outlined"
    />
  );
};

export default NumberInput;
