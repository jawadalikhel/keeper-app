//server.js: main file to connect to mongoDB

// Importing necessary packages
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cores = require("cors");
// Creating an instance of express app
const app = express();
// Defining the port number
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // for parsing application/json
app.use(cores()); // enabling CORS

// Importing routes
const routes = require("./routes/noteRoute");
app.use(routes); // Using routes middleware

// Connecting to MongoDB
mongoose
.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB..."))
.catch((error) => console.error("Error connecting to MongoDB", error));

// Starting the server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});