const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const schema = require("./schema");
const { API_PORT } = require("./constants");
const { urlencoded, json } = bodyParser;
const { List } = schema;
const app = express();

function initAPI() {
  app.use(cors());

  const router = express.Router();

  app.use(urlencoded({ extended: false }));

  app.use(json());

  app.use(logger("dev"));

  router.get("/list", (request, response) => {
    const { email } = request.query;

    if (!email) {
      return response.json({ success: false, error: "No email specified" });
    }

    List.findOne({ email }, (error, data) => {
      if (error) {
        return response.json({ success: false, error });
      }
      return response.json({ success: true, data: data });
    });
  });

  router.post("/list", async (request, response) => {
    const { email, list: children } = request.body;

    if (!email) {
      return response.json({ success: false, error: "No email specified" });
    }

    const existingList = await List.findOne({ email });

    if (existingList) {
      existingList.children = children;

      existingList.save(function(error) {
        if (error) {
          return response.json({ success: false, error });
        }
        return response.json({ success: true });
      });
    } else {
      const list = new List({ email, children });

      list.save(function(error) {
        if (error) {
          return response.json({ success: false, error });
        }
        return response.json({ success: true });
      });
    }
  });

  router.delete("/list/item", async (request, response) => {
    const { id, email } = request.body;

    if (!email) {
      return response.json({ success: false, error: "No email specified" });
    }

    const list = await List.findOne({ email });

    list.children.id(id).remove();

    list.save(function(error) {
      if (error) {
        return response.json({ success: false, error });
      }
      return response.json({ success: true });
    });
  });

  app.use("/api", router);

  app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
}

module.exports = {
  initAPI
};
