import React, { useState} from 'react';
import Toolbar from './components/Toolbar';
import NoteContainer from './components/NoteContainer';
import './App.css';

const App = (props) => {
  const state = {
    notes: [
      {id: 1, body: "This is a first test", timestamp: Date.now()},
      {id: 2, body: "Second test over here", timestamp: Date.now()},
      {id: 3, body: "This is the good third test!", timestamp: Date.now()},
      {id: 4, body: "The forth note goes", timestamp: Date.now()}
    ]    
  };  

  const [selectedNoteId, setSelectedNoteId] = useState(1);

  const handleClickNote = (id) => {
    setSelectedNoteId(id);
  }

  const [notes, SetNotes] = useState(state.notes);

  const handleNoteEditorChange = (text) => {
    const newNotes = state.notes.map((note) => {
      if (note.id === selectedNoteId) {
        return {
          id: note.id,
          body: text,
          timestamp: Date.now()
        };
      } else {
        return note;
      }
    });   
    
    SetNotes(newNotes);    
  }
  
  return (
    <div id="app">
      <Toolbar />  
      <NoteContainer notes = {notes}      
      selectedNoteId = {selectedNoteId}
      onClickNote = {handleClickNote}
      onNoteEditorChange = {handleNoteEditorChange}
      />   
    </div> 
  );
}

export default App;
