import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

//Note component

function Note(props) {
  //function to hadle click and return note id to
  //delete note
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
