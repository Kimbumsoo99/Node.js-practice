import express from "express";
// import sequelize from "./models/sequelize";
const sequelize = require("./models").sequelize;
const app = express();

const driver = () => {
  sequelize
    .sync()
    .then(() => {
      console.log("초기화 완료.");
    })
    .catch((err) => {
      console.error("초기화 실패");
      console.error(err);
    });
};
driver();

const { customers } = require("./models");

app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("Server started. port 3000. http://localhost:3000");
});

app.get("/api/customers", async (req, res) => {
  const customersData = await customers.findAll();
  console.log(customersData);
  res.send(customersData);
});
