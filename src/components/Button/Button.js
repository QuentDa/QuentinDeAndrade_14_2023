import React from 'react';

export default function Button({ buttonText, onClick }) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3"
            onClick={onClick}
            data-testid="test-button"
        >
            {buttonText}
        </button>
    );
}