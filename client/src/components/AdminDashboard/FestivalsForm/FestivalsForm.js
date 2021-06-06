import React, { useState, useEffect } from 'react';
import './FestivalsForm.css';
import axios from 'axios';

const FestivalsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/';

function FestivalsForm(props) {
    const [fests, setFests] = useState([]);
    const [selection, setSelection] = useState("-1");
    const [data, setData] = useState({
        name: '',
        logo_url: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(FestivalsUrl);
            setFests(result.data);
        };

        fetchData();
    }, []);

    function handleFestChange(event) {
        setSelection(event.target.value);
    }

    function handleFormChange(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    function submitForm(event) {
        event.preventDefault();
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
            {(+selection === 0) &&

                <form onSubmit={(e) => submitForm(e)}>
                    <input id='name' type="text" placeholder="Festival name" onChange={e => handleFormChange(e)} />
                    <input id='logo_url' type="text" placeholder="Festival logo" onChange={e => handleFormChange(e)} />
                    <button>Submit</button>
                </form>


            }
        </div>
    );
}

export default FestivalsForm;