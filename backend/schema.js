const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ItemSchema = new Schema({
  id: String,
  name: String,
  value: Number,
  category: String
});

const ListSchema = new Schema({
  email: String,
  children: [ItemSchema],
  child: ItemSchema
});

const ListModel = model("List", ListSchema);

const ItemModel = model("Item", ItemSchema);

module.exports = {
  List: ListModel,
  Item: ItemModel
};
