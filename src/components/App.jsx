import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes((prevNote) =>{
      return [...prevNote, newNote]
    })
  }

  function deleteNote(noteId){
    setNotes((prevNote)=>{
      return prevNote.filter((note, noteIndex)=>{
        return noteIndex !== noteId;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote}/>
      {
        notes.map((note, index) =>{
          return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
        })
      }
      <Footer />
    </div>
  );
}

export default App;
