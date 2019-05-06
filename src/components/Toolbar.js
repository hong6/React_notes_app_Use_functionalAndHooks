import React from 'react';

function Toolbar(){
    return (
        <div className="toolbar">
            <button className="toolbar-button">New Note</button>
            <button className="toolbar-button">Delete note</button>
            <input className="toolbar-search" type="text" placeholder="Search..."></input>
        </div>
    );
}

export default Toolbar;