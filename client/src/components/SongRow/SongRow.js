import React from 'react';
import './SongRow.css';

function SongRow({ track }) {

    console.log(track);

    return (
        <div className='songRow'>
            <img className='songRow__img' src={track.album.images[0].url} alt="" />
            <div className='songRow__info'>
                <h3 className='songRow__name'>{track.name}</h3>
                <p className='songRow__artist'>
                    {track.artists.map((artist) => artist.name).join(', ')}
                </p>
            </div>
        </div>
    );
}

export default SongRow;