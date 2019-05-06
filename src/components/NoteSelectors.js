import React from 'react';
import NoteSelector from './NoteSelector';

const NoteSelectors = (props)=>{
    const sortedNotes = props.notes.slice().sort((a, b) => 
      b.timestamp - a.timestamp
    );   

    const noteSelectors = sortedNotes.map(note =>       
      <NoteSelector
        key={note.id}
        body={note.body}
        timestamp={note.timestamp}
        id={note.id}
        selectedNoteId = {props.selectedNoteId}
        onClickNote ={props.onClickNote}       
      />
    );

    return (
      <div className="note-selectors">
        {noteSelectors}
      </div>
    );
};

export default NoteSelectors;