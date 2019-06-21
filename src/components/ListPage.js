import React, { Component } from 'react';
import axios from 'axios';
import Room from './Room';
import { Container, Row, Col } from 'reactstrap';

class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            error: null,
            isAuthorized: true,
        };
        this.interval = null;
    }

    componentDidMount() {
        this.fetchData();

        // this.interval = setInterval(() => this.fetchData(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async fetchData() {
        try {
            const response = await axios.get('/rooms');
            this.setState({ rooms: response.data });
        } catch (e) {
            // debugger;
            const status = (e.response && e.response.status) || e.message;
            switch (status) {
                case 'Network Error':
                    this.setState({ error: e.message });
                    break;
                case 401:
                    this.setState({ isAuthorized: false });
                    break;
                default:
            }
        }
    }

    deleteRoom = id => async e => {
        e.preventDefault();
        await axios.delete(`/rooms/${id}`);
        this.setState(prevState => ({ rooms: prevState.rooms.filter(room => room.id !== id) }));
    };

    render() {
        const { rooms, error, isAuthorized } = this.state;
        return (
            <div className="ListPage">
                <Container className="ListPage">
                    {isAuthorized ? (
                        <>
                            <Row>
                                <Col>
                                    <h1>My Rooms :</h1>
                                    {error && <p>{error}</p>}
                                </Col>
                            </Row>
                            <Row>
                                {rooms.length > 0 ? (
                                    rooms.map(room => (
                                        <Col>
                                            <Room
                                                key={room.id}
                                                {...room}
                                                deleteRoom={this.deleteRoom(room.id)}
                                            />
                                        </Col>
                                    ))
                                ) : (
                                    <p>No rooms available.</p>
                                )}
                            </Row>
                        </>
                    ) : (
                        <p>You are not authorized to see this</p>
                    )}
                </Container>
            </div>
        );
    }
}

export default ListPage;
