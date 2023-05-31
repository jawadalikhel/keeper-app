// Importing mongoose
const mongoose = require("mongoose");

// Creating a new schema for notes
const noteSchema = new mongoose.Schema ({
    title: {
        type: String,  // Type is string
        required: true // This field is required
    },
    content: {
        type: String,  // Type is string
        required: true // This field is required
    },
})

// Exporting the note model based on noteSchema
module.exports = mongoose.model("note", noteSchema);