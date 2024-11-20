require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT_NEW || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use("/volunteer",require("./route/volunteer"))
app.get("/", (req, res) => {
    res.send("disaster relief mechanism");
  });
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });