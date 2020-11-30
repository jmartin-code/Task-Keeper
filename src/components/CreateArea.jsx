import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

//Note creation area component

function CreateArea(props) {
  //variable boolean for the expand feature
  const [isExpanded, setExpanded] = useState(false);

  //note object for note title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  //function to capture the writing in the text area
  //funtion save the values to the note object
  function handleChange(event) {
    const { name, value } = event.target;
    // console.log(value);
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  //funtion to save the note in the main array
  function submitNote(event) {
    // console.log(note);
    if (note.title !== "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    } else {
      alert("Please enter title");
    }
    event.preventDefault();
  }
  //funtion to expand the textarea for the note
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
