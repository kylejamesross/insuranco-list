import React, { Fragment, useCallback, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import AddItemModal from "../modal/AddItemModal";
import SubmitButton from "../forms/inputs/Button";

const ModalButton = () => {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => setOpen(!open), [open]);

  return (
    <Fragment>
      <SubmitButton onClick={onClick}>
        Add <AddIcon />
      </SubmitButton>
      <AddItemModal open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default ModalButton;
