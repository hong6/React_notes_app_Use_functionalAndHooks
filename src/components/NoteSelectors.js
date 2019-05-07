import React from 'react';
import NoteSelector from './NoteSelector';
import {transformNotes} from '../helpers';

const NoteSelectors = (props)=>{     

    const noteSelectors = transformNotes(props.notes, props.searchText).map(note =>       
      <NoteSelector
        key={note.id}
        id={note.id}
        body={note.body}
        timestamp={note.timestamp}        
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