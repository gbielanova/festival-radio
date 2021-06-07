import React, { useState, useEffect } from 'react';
import './FestivalsForm.css';
import axios from 'axios';
import AddFestivalForm from '../AddFestivalForm/AddFestivalForm'

const FestivalsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/';

function FestivalsForm(props) {
    const [fests, setFests] = useState([]);
    const [selection, setSelection] = useState("-1");

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(FestivalsUrl);
            setFests(result.data);
        };

        fetchData();
    }, []);

    function handleFestChange(event) {
        setSelection(event.target.value);
        props.onChange(event.target.value);
    }

    function submitFestivalForm(data) {
        axios.post(FestivalsUrl, {
            name: data.name,
            logo_url: data.logo_url
        })
            .then(res => {
                setSelection("-1")
                axios.get(FestivalsUrl).then(res => setFests(res.data))
            })
    }

    return (
        <div>
            <label>
                Select festival:
                    <select value={selection} onChange={handleFestChange}>
                    <option value="-1" disabled></option>
                    <option value="0">Add new</option>
                    {fests.map(
                        (item) =>
                            <option value={item.id} key={item.id}>{item.name}</option>
                    )}
                </select>
            </label>
            {(+selection > 0) && <p>Show list of artists</p>}
            {(+selection === 0) && <AddFestivalForm onSubmit={submitFestivalForm} />}
        </div>
    );
}

export default FestivalsForm;