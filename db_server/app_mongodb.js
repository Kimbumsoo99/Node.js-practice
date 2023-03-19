import express from "express";
import mongodb from "./mongoose/index";
import Customer from "./mongoose/schemas/customer";

const app = express();

mongodb.connect();

app.listen(3000, () => {
  console.log("Server started. port 3000. http://localhost:3000");
});
app.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  console.log(customers);
});
