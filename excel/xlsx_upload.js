const multer = require("multer");
const path = require("path");
const xlsx = require("xlsx");

require("dotenv").config({ path: "mysql/.env" });
const mysql = require("./mysql/index");
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
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post("/upload/customers", upload.single("xlsx"), function (req, res, next) {
  const workbook = xlsx.readFile(`./uploads/${req.file.filename}`);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];
  const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);
  firstSheetJson.forEach(async (customer) => {
    await mysql.query("customerInsert", customer);
  });
  res.send("ok");
});
