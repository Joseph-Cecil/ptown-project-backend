const {OrderModel} = require("../models/OrderModel");

exports.createOrderController = async (req, res) => {
  console.log(req.body)
    const instance = new OrderModel(req.body);
    await instance.save();
    res.send(instance.toObject());
  }