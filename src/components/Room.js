import React from 'react';

const Room = ({ number, type }) => (
    <div className="Room">
        <p>{number}</p>
        <p>{type}</p>
    </div>
);

export default Room;
