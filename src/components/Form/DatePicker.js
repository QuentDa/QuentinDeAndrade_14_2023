import React from 'react';

export default function DatePicker({ label, id, date, setDate }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type="date" value={date} onChange={setDate} />
        </div>
    );
}