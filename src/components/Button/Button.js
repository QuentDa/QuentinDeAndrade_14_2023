import React from 'react';

export default function Button({buttonText, openModal}) {
    return (
        <button className="button" onClick={openModal}>{buttonText}</button>
    );
}