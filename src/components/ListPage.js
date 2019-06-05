import React, { Component } from 'react';
import axios from 'axios';

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

        this.interval = setInterval(() => this.fetchData(), 2000);
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

    render() {
        const { rooms, error, isAuthorized } = this.state;
        return (
            <div className="ListPage">
                {isAuthorized ? (
                    <>
                        <p>My Rooms :</p>
                        {error && <p>{error}</p>}
                        <div>
                            {rooms.length > 0 ? (
                                rooms.map(room => (
                                    <div className="room" key={room.id}>
                                        <p>{room.number}</p>
                                        <p>{room.type}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No rooms available.</p>
                            )}
                        </div>
                    </>
                ) : (
                    'You are not authorized to see this'
                )}
            </div>
        );
    }
}

export default ListPage;
