import React, { useState } from 'react';

function AddFestivalForm(props) {
    const [data, setData] = useState({
        name: '',
        logo_url: ''
    });

    function handleFormChange(event) {
        const newData = { ...data }
        newData[event.target.id] = event.target.value
        setData(newData)
        console.log(newData)
    }

    function submitForm(event) {
        event.preventDefault();
        props.onSubmit(data)
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input id='name' type="text" placeholder="Festival name" onChange={e => handleFormChange(e)} />
                <input id='logo_url' type="text" placeholder="Festival logo" onChange={e => handleFormChange(e)} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddFestivalForm;