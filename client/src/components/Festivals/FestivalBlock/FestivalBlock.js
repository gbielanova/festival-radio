import React from 'react';
import './FestivalBlock.css';

function FestivalBlock({ festival, chooseFestival }) {

    function handleCLick() {
        chooseFestival && chooseFestival(festival);
    }

    return (
        <div className='festivalBlock' onClick={handleCLick} tabIndex={1}>
            <img className='festivalBlock__logo' src={festival.logo_url} alt={`${festival.name} logo`} />
        </div >
    );
}

export default FestivalBlock;