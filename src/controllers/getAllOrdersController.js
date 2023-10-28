const {OrderModel} = require("../models/OrderModel");

exports.getAllOrdersController = async (req, res) => {
  const Orders = await OrderModel.find({});
  res.json(Orders)
  }