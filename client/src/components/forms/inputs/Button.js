import React from "react";
import MaterialButton from "@material-ui/core/Button";

const Button = ({ onClick, disabled, children }) => (
  <MaterialButton
    variant="contained"
    color="primary"
    type="submit"
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </MaterialButton>
);

export default Button;
