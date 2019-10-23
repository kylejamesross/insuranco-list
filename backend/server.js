const { connectDB } = require("./db");
const { initAPI } = require("./api");

connectDB();

initAPI();
