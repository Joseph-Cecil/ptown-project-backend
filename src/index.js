const express = require("express");
const cors = require("cors"); 
const mongoose = require("mongoose");
const https = require('https');
const {createOrderController} = require("./controllers/createOrderController");
const {getAllOrdersController} = require("./controllers/getAllOrdersController");
const app = express();


require("dotenv").config();
app.use(express.json());
app.use(cors());

const uri = process.env.MY_DATABASE_URL;
const port = process.env.PORT || 5000;

const options="https://sprall-buy-api.onrender.com"

//Create an Order
app.post("/order", createOrderController);

// Getting all Orders, Delivery guy
app.get("/orders", getAllOrdersController)

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    // Start the HTTPS server
    https.createServer(options, app).listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
