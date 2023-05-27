const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema ({
    title: String,
    content: String
    // title: {
    //     type: String,
    //     require: true
    // },
    // content: {
    //     type: String, 
    //     require: true
    // }
})

module.exports = mongoose.model("note", noteSchema);