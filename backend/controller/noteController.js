// Importing note model
const noteModel = require("../models/noteModel");

// Function to get all notes
module.exports.getAllNotes = async (req, res) => {
    try {
        const getAllNotes = await noteModel.find();
        res.send(getAllNotes);
    } catch (error) {
        console.error("Error with getting all notes", error);
    }
}

// Function to save a note
module.exports.saveNote = async (req, res) =>{
    const { title, content } = req.body.newNote;

    try {
        const data = await noteModel.create({ title, content });
        res.send(data);
    } catch (error) {
        console.error("Error with saving note", error);
    }
};

// Function to update a note
module.exports.updateNote = async(req, res) =>{
    const {_id, title, content} = req.body.updateNote;
    try {
        await noteModel.findByIdAndUpdate(_id, { title, content });
        res.send("Updated Successfully...");
    } catch (error) {
        console.error("Error with Updating Note", error);
    }
}

// Function to delete a note
module.exports.deleteNote = async(req, res) =>{
    const id = req.body.deleteNoteId;
    try {
        await noteModel.findByIdAndDelete(id);
        res.send("Delete Note Successfully...");
    } catch (error) {
        console.error("Error with Deleting Note", error);
    }
}