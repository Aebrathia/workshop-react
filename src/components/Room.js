import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card, CardTitle, CardBody, Button,
} from 'reactstrap';

const Room = ({
    id, number, type, deleteRoom,
}) => (
    <Card className="Room">
        <CardBody>
            <CardTitle>
                {number}
                {', '}
                {type}
            </CardTitle>
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
