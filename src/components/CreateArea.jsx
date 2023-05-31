import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import EditIcon from '@mui/icons-material/Edit';

// Component to create or edit a note
export default function CreateArea(props) {
  // Declare state for note
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Update note state when props.editNote changes
  useEffect(() => {
    // explain this code ???????
    setNote(props.editNote || { title: "", content: "" });
  }, [props.editNote]);

  // Update note's title or content based on input changes
  function handleChange(event) {
    const { name, value } = event.target;

    // explain this code ???????
      setNote(prevNote => ({
          ...prevNote,
          [name]: value
      }));
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // .trimg() checks for whitespace before and after a string and removes them 
    // // Alert user if note's title or content is empty
    if (!note.title.trim() || !note.content.trim()) {
      alert('Title and Content cannot be empty!');
      return;
    }
    
    // Update or add note
    if (props.isUpdating) {
      props.onUpdate(note);
    } else {
      props.onAdd(note, setNote);
    }
  
    // Reset note
    setNote({
      title: "",
      content: ""
    });
  }

  // Declare state for input expansion
  const [isExpanded, setIsExpanded] = useState(false);

  // Expand input when clicked
  function handleExpand(){
    setIsExpanded(true)
  }

  // Determine the rows, Zoom 'in' property, action icon, and whether to show the title input 
  const rows = isExpanded || props.isUpdating ? "3" : "1";
  const zoomIn = isExpanded || props.isUpdating;
  const actionIcon = props.isUpdating ? <EditIcon /> : <AddIcon />;
  const showTitleInput = isExpanded || props.isUpdating;
  const placeholderText = props.isUpdating ? note.content : "Write Your Note...";


  return (
    <div>
      <form className="create-note">
        {/* showTitleInput Checks if the form should be expanded (either because a user is 
        creating a new note or updating an existing note) and false otherwise. */}
        {showTitleInput && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={handleExpand}
          onChange={handleChange}
          value={note.content}
          placeholder={placeholderText}
          rows={rows}
        />

        <Zoom in={zoomIn}>
            <Fab onClick={handleSubmit}>
              {actionIcon}
            </Fab>
        </Zoom> 
      </form>
    </div>
  );
}
