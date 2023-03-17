import express from "express";
import mysql from "./mysql/index";

const app = express();

app.listen(3000, () => {
  console.log("Server started. port 3000. http://localhost:3000");
});

app.use(
  //body에 담아 전송한 JSON 데이터를 활용하기 위한 미들웨어
  express.json({
    limit: "50mb",
  })
);

app.get("/api/customers", async (req, res) => {
  const customers = await mysql.query("customerList");

  console.log(customers);
  res.send(customers);
});

app.post("/api/customer/insert", async (req, res) => {
  const result = await mysql.query("customerInsert", req.body.param);
  res.send(result);
});
