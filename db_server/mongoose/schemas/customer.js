import mongoose from "mongoose";

const { Schema } = mongoose;
const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  address: { type: String },
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
