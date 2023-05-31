// Importing necessary components and icons
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// Functional component Note that accepts props as a parameter
export default function Note({id, title, content, onUpdate, onDelete, setIsUpdating}) {
  // Returns a note with title, content and action buttons
  return (
    <div className="note" key={id}>
      <h1>{title}</h1>
      <p>{content}</p>

      <button onClick={()=> onDelete(id)}>
        <DeleteIcon/>
      </button>

      <button  onClick={()=>{
          onUpdate(id, title, content)
          setIsUpdating(true)
          }}
      >
        <EditIcon/>
      </button>
      
    </div>
  );
}