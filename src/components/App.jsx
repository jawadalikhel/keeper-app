// Importing necessary components
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
// Utility imports
import {getAllNotes, addNewNote, updateNotes, deleteNotes} from "../utils/HandleApi";

// App is the root component of this application
export default function App() {
  
    // useState hooks to manage state in functional components
  const [notes, setNotes] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editNote, setEditNote] = useState(null);

  // useEffect hook for side-effects in functional components
  // Load all notes when the component first mounts
  useEffect(() => {
    getAllNotes(setNotes);
  },[]) // empty dependency array means this effect runs once when the component mounts

  // Add a new note
  function addNote(newNote, setNewNote) {
    // Use functional update to avoid race conditions when updating the state
    setNotes(prevNotes => [...prevNotes, newNote]);
    // Call the API to add the new note
    addNewNote(newNote, setNewNote, setNotes);
  }

  // Set the application into "update mode" with the data from the note to be updated
  function updateMode(updatedId, updatedTitle, updatedContent) {
    setEditNote({ 
      _id: updatedId, 
      title: updatedTitle, 
      content: updatedContent 
    });
    setIsUpdating(true);
  }

  // Update a note with new data
  function updateNote(updatedNote) {
    // Update the note with the matching ID in the local state
    setNotes(prevNotes =>
      prevNotes.map(note => note._id === updatedNote._id ? updatedNote : note)
    );
    // Call the API to update the note
    updateNotes(updatedNote._id, updatedNote, setEditNote, setNotes, setIsUpdating);
    // Reset the update mode
    setEditNote(null);
    setIsUpdating(false);
  }
  
  // Delete a note
  function deleteMode(deleteNoteID) {
    // Filter out the note with the matching ID from the local state
    setNotes(prevNotes => {
      return prevNotes.filter((note) =>{
        return note._id !== deleteNoteID
      })
    })

    // Call the API to delete the note
    deleteNotes(deleteNoteID);
  }

  // Render the component
  return (
    <div>
      <Header />
      <CreateArea 
        setNotes={setNotes} 
        onAdd={addNote} 
        onUpdate={updateNote} 
        isUpdating={isUpdating} 
        editNote={editNote} 
      />

      {notes.map((noteItem, index) => (
        <Note
          key={noteItem._id}
          id={noteItem._id}
          title={noteItem.title}
          content={noteItem.content}
          onUpdate={updateMode}
          setIsUpdating={setIsUpdating}
          onDelete={deleteMode}
        />
      ))}
      <Footer />
    </div>
  );
}
