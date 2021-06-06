import React, { Component } from 'react';
import './FestivalsForm.css';
import AddFestivalForm from '../AddFestivalForm/AddFestivalForm';

class FestivalsForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: -1 };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <label>
                    Select festival:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="-1" disabled></option>
                        <option value="0">Add new</option>
                        {this.props.data.map(
                            (item) =>
                                <option value={item.id} key={item.id}>{item.name}</option>
                        )}
                    </select>
                </label>
                {(+this.state.value === 0) && <AddFestivalForm />}
                {(+this.state.value > 0) && <p>Show list of artists</p>}
            </div>
        );
    }
}

export default FestivalsForm;