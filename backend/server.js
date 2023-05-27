// server/index.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("Connected to MongoDB..."))
.catch((err) => console.log(err, "<---- Error connecting to MongoDB"));

const notesSchema = {
    title: String,
    content: String
};

const note = mongoose.model("Note", notesSchema);



app.get("/", (req, res) =>{
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});