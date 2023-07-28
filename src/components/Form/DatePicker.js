import React from 'react';

export default function DatePicker({ label, id, date, setDate, error }) {
    return (
        <div className='col-span-2'>
            <label className='block text-left text-gray-400' htmlFor={id}>{label}</label>
            <input id={id} type="date" value={date} onChange={setDate}
                className='border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500'
            />
            {error && (<p className='text-red-500 text-xs italic'>{error}</p>)}
        </div>
    );
}
