import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const handleSubmit = setShouldRedirect => async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    await axios.post('/rooms', data);
    setShouldRedirect(true);
};

const CreatePage = () => {
    const [shouldRedirect, setShouldRedirect] = useState(false);
    return (
        <div className="CreatePage">
            {shouldRedirect && <Redirect to="/view" />}
            <form onSubmit={handleSubmit(setShouldRedirect)}>
                <label htmlFor="number">Number</label>
                <input id="number" name="number" type="number" step="1" />
                <label htmlFor="type">Type</label>
                <input id="type" name="type" type="text" />
                <button type="submit">Create new room</button>
            </form>
        </div>
    );
};

export default CreatePage;
