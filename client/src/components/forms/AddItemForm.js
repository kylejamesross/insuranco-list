import React, { useCallback, useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import CategorySelect from "./inputs/CategorySelect";
import Button from "./inputs/Button";
import ListContext from "../contexts/list-context";
import UserContext from "../contexts/user-context";
import NameInput from "./inputs/NameInput";
import NumberInput from "./inputs/NumberInput";

const AddItemForm = ({ setOpen }) => {
  const { addItem } = useContext(ListContext);
  const { user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const onSubmit = useCallback(() => {
    addItem({ name, category, value: parseInt(value, 10) }, user);
    setName("");
    setValue("");
    setCategory("");
    setOpen(false);
  }, [addItem, value, name, category, user, setOpen]);

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <NameInput value={name} setName={setName} />
        </Grid>
        <Grid item xs={12}>
          <NumberInput value={value} setValue={setValue} />
        </Grid>
        <Grid item xs={12}>
          <CategorySelect value={category} setValue={setCategory} />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={category === "" || value === "" || name === ""}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddItemForm;
