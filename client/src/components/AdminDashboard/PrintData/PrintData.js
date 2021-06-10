import React from 'react';
import './PrintData.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function PrintData({ title, selectedData, data, onClick, openForm }) {

    function getClasses(id) {
        let classes = '';
        ((selectedData && (typeof selectedData === 'number') && (selectedData === id)) ||
            (selectedData && (typeof selectedData === 'object') && (selectedData.indexOf(id) > -1)))
            ? classes = 'printData__element selected'
            : classes = 'printData__element';
        return classes;
    }

    return (
        <section className='printData'>
            <header className='printData__header'>{title}</header>
            <div className="printData__body">
                {data.map(
                    (item) =>
                        <p className={getClasses(item.id)} key={item.id} onClick={() => onClick(item)} tabIndex={0}>{item.name}</p>
                )}
                <AddCircleIcon fontSize="large" className='printData__add' onClick={() => openForm(title)} tabIndex={0} /></div>
        </section>
    );
}

export default PrintData;