import React from 'react';

function NewToDoBTN(props) {

    return (
        <div className="main">
            <button id="btntodo" onClick={() => props.updateModalIsOpen(true)}>+ Todo</button>
        </div>
    )
}

export default NewToDoBTN