const {Router} = require("express");
const router = Router();

const {getNote, saveNote, updateNote, deleteNote} = require ("../controller/noteController.js");

router.get("/", getNote)
router.post("/save", saveNote);
router.post("/update", updateNote);
router.post("/delete", deleteNote);

/////// the top code is the same as below except we are calling our routes from the controller.js
// router.get("/", (req, res) =>{
//     res.json({message: "Hello from Server!!!"})
// })

module.exports = router;