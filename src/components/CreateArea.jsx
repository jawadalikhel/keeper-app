import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event){
    let name = event.target.name;
    let value = event.target.value;

    setNote((prevNotes) =>{
      return{
        ...prevNotes,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.addNote(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={props.addNote}>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
