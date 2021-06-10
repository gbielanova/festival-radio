import React from 'react';
import './SongRow.css';
import { useDataLayerValue } from '../../../DataLayer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';

function SongRow({ track, playSong }) {
    const [{ playingPlaylist, playingTrack, playingNow, premium }] = useDataLayerValue();

    if (!track) return (<></>);

    return (
        <article className={`songRow ${(playingTrack === track) ? 'songRow-active' : ''}`} onClick={() => playSong(track)} tabIndex={0}>
            {((playingTrack === track) && premium) &&
                (playingNow ? <PauseIcon className='songRow__icon' /> : <PlayArrowIcon className='songRow__icon' />)}
            <img className='songRow__img' src={track.album?.images[0]?.url || playingPlaylist?.image} alt="" />
            <div className='songRow__info'>
                <h3 className='songRow__name'>{track.name}</h3>
                <p className='songRow__artist'>
                    {track.artists.map((artist) => artist.name).join(', ')}
                </p>
            </div>
        </article>
    );
}

export default SongRow;