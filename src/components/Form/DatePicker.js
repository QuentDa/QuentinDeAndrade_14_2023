import React from 'react';

export default function DatePicker({ label, id, date, setDate }) {
    const handleChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="date" value={date} onChange={handleChange} />
        </div>
    );
}