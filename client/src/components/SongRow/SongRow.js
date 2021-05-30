import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from '../../DataLayer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';


function SongRow({ track, playSong }) {
    const [{ playingPlaylist, playingTrack }] = useDataLayerValue();

    if (!track) return (<></>);

    let activeTrack = playingTrack === track;

    return (
        <div className={`songRow ${activeTrack && 'songRow-active'}`} onClick={() => playSong(track)}>
            {activeTrack && <PlayArrowIcon className='songRow__icon' />}
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