const express = require("express");
const HTTP_SERVER = express();
const cors = require("cors");
var bodyParser = require("body-parser");

// HTTP_SERVER.use(cors());

// parse application/x-www-form-urlencoded
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
HTTP_SERVER.use(bodyParser.json());

// BASIC SERVER CONFIS
const port = 5000;

HTTP_SERVER.listen(port, "localhost", () => {
  console.log("SERVER STARTED IN THE PORT", port);
});

//INJECTING API SERVER
HTTP_SERVER.use("/", require("./app"));
