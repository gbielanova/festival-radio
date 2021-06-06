import React, { useState } from 'react';

function AddArtistForm(props) {
    const [data, setData] = useState({
        name: '',
    })

    function handleFormChange(event) {
        setData(event.target.value)
    }

    function submitForm(event) {
        event.preventDefault();
        props.onSubmit(data)
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <input id='name' type="text" placeholder="Artist name" onChange={e => handleFormChange(e)} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddArtistForm;