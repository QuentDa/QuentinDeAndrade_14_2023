import React from 'react';

export default function Button({ButtonText, openModal}) {
    return (
        <div className="button">
            <button onClick={openModal}>{ButtonText}</button>
        </div>
    );
}