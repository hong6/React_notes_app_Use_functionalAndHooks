import React, { useState} from 'react';
import {formatTitle, formatTimestamp} from '../helpers';

const NoteSelector = (props) => { 

    return (
        <div className={"note-selector " + (props.id === props.selectedNoteId ? 'active' : '') }
            onClick = {()=>{props.onClickNote(props.id)}}           
        >
            <p className="note-selector-title">{formatTitle(props.body)}</p>
            <p className="note-selector-timestamp">{formatTimestamp(props.timestamp)}</p>
        </div>
    );
}

export default NoteSelector;