const multer = require("multer");
const path = require("path");
const xlsx = require("xlsx");

require("dotenv").config({ path: "../db_server/.env" });
const mysql = require("../db_server/mysql/index");
const express = require("express");

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
});
