import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({ id, number, type }) => (
    <div className="Room">
        <p>{number}</p>
        <p>{type}</p>
        <Link to={`/edit/${id}`}>Edit</Link>
    </div>
);

export default Room;
