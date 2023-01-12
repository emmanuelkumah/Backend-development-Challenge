const express = require("express"); //require express
const products = require("./data"); //import the data
const app = express(); //create the app

//send a JSON response to the client
app.get("/api/v1/products", (req, res) => {
  res.json(products);
});

//listen for connection to the server
app.listen(5000, () => {
  console.log("App has started and is running ");
});
