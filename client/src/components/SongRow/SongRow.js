import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from '../../DataLayer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


function SongRow({ track, playSong }) {
    const [{ playingPlaylist, playingTrack, premium }] = useDataLayerValue();

    if (!track) return (<></>);

    return (
        <div className={`songRow ${(playingTrack === track) ? 'songRow-active' : ''}`} onClick={() => playSong(track)}>
            {((playingTrack === track) && premium) && <PlayArrowIcon className='songRow__icon' />}
            <img className='songRow__img' src={track.album?.images[0]?.url || playingPlaylist?.image} alt="" />
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