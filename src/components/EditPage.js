import React, { Component } from 'react';
import axios from 'axios';

class EditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            number: '',
            type: '',
        };
    }

    async componentDidMount() {
        const { match } = this.props;
        const { id } = match.params;
        const response = await axios.get(`/rooms/${id}`);
        const { number, type } = response.data;
        this.setState({ id, number, type });
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { number, type } = this.state;
        return (
            <div className="EditPage">
                <form onSubmit={() => {}}>
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
                    <button type="submit">Create new room</button>
                </form>
            </div>
        );
    }
}

export default EditPage;
