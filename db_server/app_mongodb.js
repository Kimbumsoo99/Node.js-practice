import "./mongoose/index";
import "./mongoose/schemas/customer";
import express from "express";
import Customer from "./mongoose/schemas/customer";

const app = express();

app.listen(3000, () => {
  console.log("Server started. port 3000. http://localhost:3000");
});
app.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  console.log(customers);
  res.end();
});

app.post("/customers", async (req, res) => {
  const r = await Customer.create({
    name: "Customer1",
    email: "customer1@mail.com",
    phone: "010-1111-1234",
    address: "",
  });
  console.log(r);

  res.end();
});
