const noteModel = require("../models/noteModel");

module.exports.getNote = async (req, res) => {
    const note = await noteModel.find();
    res.send(note);
}

module.exports.saveNote = async (req, res) =>{
    const { title, content } = req.body;

    noteModel.create({title, content})
    .then((data) =>{
        console.log("Data Added to DB");
        console.log(data, "<---- This is the data recived");
        res.send(data);
    })
};

module.exports.updateNote = async(req, res) =>{
    const {_id, title, content} = req.body;

    noteModel
    .findByIdAndUpdate(_id, {title, content})
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err, "<---- Error with Updating Note"))
}

module.exports.deleteNote = async(req, res) =>{
    const {_id} = req.body;

    noteModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Delete Note Successfully..."))
    .catch((err) => console.log(err, "<---- Error with Deleting Note"))
}

