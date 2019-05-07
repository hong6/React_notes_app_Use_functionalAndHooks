import React from 'react';

const Toolbar = props => {

    const handleInput = (event) => {
        props.onSearchNote(event.target.value);
    }

    return (
        <div className="toolbar">
            <button className="toolbar-button"               
                onClick = {props.onNewNote}
            >
                New Note
            </button>
            <button className="toolbar-button"
                onClick = {props.onDeleteNote}
            >            
                Delete note
            </button>
            <input className="toolbar-search" 
                type="text" 
                placeholder="Search..."
                onInput = {handleInput}
                >
            </input>
        </div>
    );
}

export default Toolbar;