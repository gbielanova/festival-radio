import React from 'react';
import './FestivalBlock.css';

function FestivalBlock({ festival, chooseFestival }) {

    function handleCLick() {
        chooseFestival && chooseFestival(festival);
    }

    return (
        <div className='festivalBlock' onClick={handleCLick}>
            <img className='festivalBlock__logo' src={festival.logo_url} alt={`${festival.name} logo`} />
        </div>
    );
}

export default FestivalBlock;