import React, { useState, useEffect } from 'react';
import './PrintData.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';

function PrintData({ title, selectedData, data, onClick, openForm }) {
    const [dataToShow, setDataToShow] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        if (showAll) { setDataToShow([...data]); }
        else {
            let newData = [];
            let maxIndex = (data.length > 10) ? 10 : data.length;
            for (let i = 0; i < maxIndex; i++) {
                newData.push(data[i]);
            }
            setDataToShow([...newData]);
        }
    }, [data, showAll]);

    function getClasses(id) {
        let classes = '';
        ((selectedData && (typeof selectedData === 'number') && (selectedData === id)) ||
            (selectedData && (typeof selectedData === 'object') && (selectedData.indexOf(id) > -1)))
            ? classes = 'printData__element selected'
            : classes = 'printData__element';
        return classes;
    }

    function handleShowMore() {
        setShowAll(!showAll);
    }

    return (
        <section className='printData'>
            <header className='printData__header'>{title}</header>

            {(data.length > 10) && <button className="printData__button" onClick={handleShowMore}>{showAll ? 'Show first 10' : 'Show all'}</button>}

            <div className="printData__body">
                {dataToShow?.map(
                    (item) =>
                        <p className={getClasses(item?.id)} key={item?.id} onClick={() => onClick(item)} tabIndex={0}>{item?.name}</p>
                )}
                <AddCircleIcon fontSize="large" className='printData__add' onClick={() => openForm(title)} tabIndex={0} /></div>
        </section>
    );
}

export default PrintData;