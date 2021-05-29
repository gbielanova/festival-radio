import React from 'react';
import './SongRow.css';

function SongRow({ track, playSong }) {
    return (
        <div className='songRow' onClick={() => playSong(track)}>
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