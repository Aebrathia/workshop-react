import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Button } from 'reactstrap';

const Room = ({
    id, number, type, deleteRoom,
}) => (
    <Card className="Room">
        <CardBody>
            <p>{number}</p>
            <p>{type}</p>
            <Button color="danger" onClick={deleteRoom}>
                Delete
            </Button>
            <Button color="primary" tag={Link} to={`/edit/${id}`}>
                Edit
            </Button>
        </CardBody>
    </Card>
);

export default Room;
