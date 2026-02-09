import React, { useState } from "react";

const Notes = () => {
  const [note, setNote] = useState({ name: "", title: "" });
  const [notes, setNotes] = useState([]);
  const handleTitleChange = (e) => {
    let localNote = {
      title: e.target.value,
      note: note.note,
    };
    setNote(localNote);
  };
  const handleNoteChange = (e) => {
    let localNote = {
      title: note.title,
      note: e.target.value,
    };
    setNote(localNote);
  };
  const handleAddNote = () => {
    setNotes(notes.concat(note));
    setNote({ title: "", note: "" });
  };
  return (
    <>
      <div className="container mb-5">
        <h2 className="bg-success text-white w-100 bg-success mt-4">
          Notes Application
        </h2>
        <label htmlFor="title">Add Title</label>
        <input type="text" id="title" onChange={handleTitleChange} value={note.title}/>
        <label htmlFor="note">Add Description</label>
        <input type="text" id="note" onChange={handleNoteChange} value={note.note}/>
        <button onClick={handleAddNote}>Add note</button>
      </div>
      <div className="d-flex flex-wrap container gap-2">
        {notes.map((item) => (
          <div className="w-20 border border-4 p-3">
            <p className="border border-2">{item.title}</p>
            <p className="border border-2">{item.note}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
