import React from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import AddItemForm from "../forms/AddItemForm";

const AddItemModal = ({ open, setOpen }) => (
  <Modal open={open} setOpen={setOpen}>
    <div className="modal-content">
      <ModalHeader title="Add Item ➕" />
      <AddItemForm setOpen={setOpen} />
    </div>
  </Modal>
);

export default AddItemModal;
