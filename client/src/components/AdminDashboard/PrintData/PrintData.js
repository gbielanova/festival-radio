import React from 'react';
import './PrintData.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function PrintData({ title, data, onClick, openForm }) {
    return (
        <section className='printData'>
            <header className='printData__header'>{title}</header>
            <div className="printData__body">
                {data.map(
                    (item) =>
                        <p className='printData__element' key={item.id} onClick={() => onClick(item)}>{item.name}</p>
                )}
                <AddCircleIcon fontSize="large" className='printData__add' onClick={() => openForm(title)} /></div>
        </section>
    );
}

export default PrintData;