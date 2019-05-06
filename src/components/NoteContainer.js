import React from 'react';
import NoteSelectors from './NoteSelectors';
import NoteEditor from './NoteEditor';

const NoteContainer = (props) => {
  const selectedNote = props.notes.find(note =>
    note.id === props.selectedNoteId
  );

    return (
      <div className="note-container">
        <NoteSelectors notes={props.notes} 
        selectedNoteId = {props.selectedNoteId}
        onClickNote = {props.onClickNote}
        />
        <NoteEditor 
          selectedNote={selectedNote}
          onNoteEditorChange={props.onNoteEditorChange}
        />
      </div>
    );
}

export default NoteContainer;