"use strict";
var express = require("express");
var bodyParser = require("body-parser");
var storeRouter = require("./routes/storeRoute");

var app = express();

var jsonParser = bodyParser.json();

var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use("/store", storeRouter);

var port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
