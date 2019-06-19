import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldRedirect: false,
            room: {
                id: null,
                number: '',
                type: '',
            },
        };
    }

    async componentDidMount() {
        const { match } = this.props;
        const { id } = match.params;
        const response = await axios.get(`/rooms/${id}`);
        const { number, type } = response.data;
        this.setState({ room: { id: Number(id), number, type } });
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { id } = this.state.room;
        await axios.put(`/rooms/${id}`, this.state.room);
        this.setState({ shouldRedirect: true });
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState(prevState => ({ room: { ...prevState.room, [name]: value } }));
    };

    render() {
        const {
            room: { number, type },
            shouldRedirect,
        } = this.state;
        return (
            <div className="EditPage">
                {shouldRedirect && <Redirect to="/view" />}
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="number">Number</label>
                    <input
                        id="number"
                        name="number"
                        type="number"
                        step="1"
                        value={number}
                        onChange={this.handleChange}
                    />
                    <label htmlFor="type">Type</label>
                    <input
                        id="type"
                        name="type"
                        type="text"
                        value={type}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Edit room</button>
                </form>
            </div>
        );
    }
}

export default EditPage;
