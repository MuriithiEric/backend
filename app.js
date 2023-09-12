// Import the express module
const express = require("express");

//Create an express application
const app = express();
const port = 1000;

app.get("/", (req, res) => {
  // "/" is the path
  res.send("Hello World!"); // Send the response
});

//start the server to listen for requests

// const port = process.env.PORT || 1000;

app.listen(port, () => {
  console.log("Server is running on port ${port}");
}); // Listen on port 1000 for incoming connections
