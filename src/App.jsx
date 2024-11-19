import { useState } from "react";
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import Input from "./components/Input";
import Active from "./components/Active";
import Archive from "./components/Archive";
import { getInitialData } from "./utils";


const initialNotes = getInitialData;

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const [searchText, setSearchText] = useState("");

  const addNote = (note) => {
    return setNotes((prevNotes) => [...prevNotes, note]);
  }

  const deleteNote = (id) => {
    return setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  const archiveNote = (id) => {
    return setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, archieved: true } : note)));
  }

  const unarchiveNote = (id) => {
    return setNotes((prevNotes) => prevNotes.map((note) => (note.id === id ? { ...note, archieved: false } : note)));
  }

  const handleFilterNotes = (text) => {
    return setSearchText(text);
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(searchText.toLowerCase());
  })
  
  return (
    <div className="note-app">
      <Navbar filterNotes={handleFilterNotes} />
      <Notes>
        <Input addNote={addNote} />
        <Active notes={filteredNotes} onDelete={deleteNote} onArchive={archiveNote} />
        <Archive notes={filteredNotes} onDelete={deleteNote} onUnarchive={unarchiveNote} />
      </Notes>
    </div>
  )
}

export default App
