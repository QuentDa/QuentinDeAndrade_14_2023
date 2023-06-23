const states = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    // ... Autres États ...
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

export default function States({setState}) {
    return (
        <div>
            <label htmlFor="state">State</label>
            <select name="state" id="state" onChange={setState}>
                {states.map(state => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                        {state.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
