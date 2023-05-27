// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

const routes = require("./routes/noteRoute");

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.log(err, "<---- Error connecting to MongoDB"));


app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});