import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
        };
        this.interval = null;
    }

    componentDidMount() {
        this.fetchData();

        this.interval = setInterval(() => this.fetchData(), 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    async fetchData() {
        const response = await axios.get('/rooms');
        this.setState({ rooms: response.data });
    }

    render() {
        const { rooms } = this.state;
        return (
            <div className="App">
                <p>My Rooms :</p>
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
            </div>
        );
    }
}

export default App;
