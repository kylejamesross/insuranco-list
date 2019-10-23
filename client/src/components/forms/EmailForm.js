import React, { useCallback, useContext } from "react";
import { Grid } from "@material-ui/core";
import ListContext from "../contexts/list-context";
import UserContext from "../contexts/user-context";
import EmailInput from "./inputs/EmailInput";
import Button from "./inputs/Button";

const EmailForm = () => {
  const { loadList } = useContext(ListContext);

  const { user, setEmail } = useContext(UserContext);

  const { email = "" } = user;

  const onSubmit = useCallback(() => loadList(email), [loadList, email]);

  return (
    <form onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EmailInput setEmail={setEmail} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button disabled={email === ""} onClick={onSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EmailForm;
