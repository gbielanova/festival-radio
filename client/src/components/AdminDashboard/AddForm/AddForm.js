import React, { useState } from 'react';
import './AddForm.css';

function AddForm(props) {
    const [data, setData] = useState({
        name: '',
        logo_url: ''
    })

    function handleFormChange(event) {
        const newData = { ...data };
        newData[event.target.id] = event.target.value;
        setData(newData);
    }

    function submitForm(event) {
        event.preventDefault();
        props.onSubmit(data)
    }

    return (
        <form className='form' onSubmit={(e) => submitForm(e)}>
            <input className='form__input' id='name' type="text" placeholder={props.placeholder} onChange={e => handleFormChange(e)} />
            {props.logo_placeholder && <input className='form__input' id='logo_url' type="text" placeholder={props.logo_placeholder} onChange={e => handleFormChange(e)} />}
            <button className='form__button'>Add</button>
            <p className="form__error">{props.errorMessage}</p>
        </form>
    );
}

export default AddForm;