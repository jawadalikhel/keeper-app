// Importing Router from express
const {Router} = require("express");
// Creating an instance of Router
const router = Router();

// Importing controller functions
const {getAllNotes, saveNote, updateNote, deleteNote} = require ("../controller/noteController.js");

// Setting up routes for note operations
router.get("/", getAllNotes)
router.post("/save", saveNote);
router.post("/update", updateNote);
router.post("/delete", deleteNote);

// Exporting router to be used in other parts of the application
module.exports = router;