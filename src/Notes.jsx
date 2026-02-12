import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Notes = () => {
  const [note, setNote] = useState({ name: "", title: "" });
  const [notes, setNotes] = useState([]);
  const [isUpdating, SetIsUpdating] = useState(true);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const isEmpty = () => {
    if (note.title.trim.length < 1 || note.name.trim.length < 1) {
      return true;
    } else return false;
  };
  const handleAddNote = () => {
    if (!isEmpty()) {
      setNotes([...notes, note]);
      toast.success("Note created successfully");
      setNote({ title: "", note: "" });
    } else {
      toast.error("Notes cannot be empty");
    }
  };
  const handleEdit = (i) => {
    SetIsUpdating(false);
    setNote(notes[i]);
    setEditIndex(i);
  };
  const handleDelete = (i) => {
    let locNotes = [...notes];
    locNotes.splice(i, 1);
    setNotes(locNotes);
    toast.success("Note deleted successfully");
  };
  const handleUpdateNote = () => {
    let localNotes = [...notes];
    localNotes[editIndex] = note;
    setNotes(localNotes);
    SetIsUpdating(true);
    toast.success("Note updated successfully !!");
    setNote({ title: "", note: "" });
  };
  return (
    <>
      <Toaster />
      <div className="container mb-5">
        <h2 className="bg-success text-white w-100 bg-success mt-4">
          Notes Application
        </h2>
        <label htmlFor="title">Add Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          value={note.title}
        />
        <label htmlFor="note">Add Description</label>
        <input
          type="text"
          id="note"
          name="note"
          onChange={handleChange}
          value={note.note}
        />
        <button onClick={handleAddNote} disabled={!isUpdating}>
          Add note
        </button>
        <button disabled={isUpdating} onClick={handleUpdateNote}>
          Update note
        </button>
      </div>
      <div className="d-flex flex-wrap container gap-2">
        {notes.map((item, index) => (
          <div className="w-20 border border-4 p-3" key={index}>
            <p className="border border-2">{item.title}</p>
            <p className="border border-2">{item.note}</p>
            <div className="d-flex gap-2 flex-wrap">
              <button
                onClick={() => handleEdit(index)}
                className="btn btn-primary text-white"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="btn btn-danger text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
