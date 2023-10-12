import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function addNote(note) {
    setNewNote((p) => {
      return [...p, note];
    });
  }

  function deleteNote(id) {
    setNewNote((p) => {
      return p.filter((note, i) => {
        return i !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {newNote.map((n, i) => {
        return (
          <Note
            onDelete={deleteNote}
            key={i}
            id={i}
            title={n.title}
            content={n.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
