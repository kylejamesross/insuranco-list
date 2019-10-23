import React, { Fragment } from "react";
import { FormHelperText, InputLabel, TextField } from "@material-ui/core";

const EmailInput = ({ setEmail }) => (
  <Fragment>
    <InputLabel htmlFor="email-input">Email address</InputLabel>
    <TextField
      id="filled-email-input"
      className="email-input"
      label="Email"
      type="email"
      name="email"
      autoComplete="email"
      margin="normal"
      variant="filled"
      onChange={event => setEmail(event.target.value)}
      required
    />
    <FormHelperText id="email-input-text">
      Enter your email to start!{" "}
      <span role="img" aria-label="space-invader-emoji">
        👾
      </span>
    </FormHelperText>
  </Fragment>
);

export default EmailInput;
