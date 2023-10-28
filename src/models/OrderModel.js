const mongoose = require("mongoose");

const schema = mongoose.Schema;
// const objectId = schema.ObjectId;

const OrderSchema = new schema({
  name: String,
  price: Number,
  description: String,
  // Used Area Name for Full Name of the customer
  areaName: String,
  streetName: String,
  houseNum: String,
  phoneNum: Number
}); 

const OrderModel = mongoose.model("Order", OrderSchema);

exports.OrderModel = OrderModel;