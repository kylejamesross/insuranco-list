const mongoose = require("mongoose");
const { DB_ROUTE } = require("./constants");
const { connect, connection: db } = mongoose;

function connectDB() {
  connect(
    DB_ROUTE,
    { useNewUrlParser: true }
  );

  db.once("open", () => console.log("connected to the database"));

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
}

module.exports = { connectDB };
