// Importing axios library for HTTP requests
import axios from "axios";
// Base URL of the API endpoint
const baseUrl = "http://localhost:3001";

// Function to fetch all notes
const getAllNotes = async (setNotes) =>{
    try {
        const response = await axios.get(baseUrl);
        setNotes(response.data);
    } catch (error) {
        console.error("Error with fetching getAllNotes", error);
    }
}

// Function to add a new note
const addNewNote = async (newNote, setNewNote, setNotes) =>{
    try {
        await axios.post(`${baseUrl}/save`,{newNote});
        setNewNote("");
        getAllNotes(setNotes);
    } catch (error) {
        console.error("Error with adding Note", error);
    }
}

// Function to update existing notes
const updateNotes = async (noteId, updateNote, setUpdateNote, setNotes, setIsUpdating) =>{
    try {
        await axios.post(`${baseUrl}/update`,{_id: noteId, updateNote});
        setUpdateNote("");
        setIsUpdating(false);
        getAllNotes(setNotes);
    } catch (error) {
        console.error("Error with updating Note", error);
    }
}

// Function to delete a note
const deleteNotes = async (deleteNoteId) =>{

    try {
        await axios.post(`${baseUrl}/delete`,{deleteNoteId});
    } catch (error) {
        console.error("Error with deleting Note", error);
    }
}

export {getAllNotes, addNewNote, updateNotes, deleteNotes};