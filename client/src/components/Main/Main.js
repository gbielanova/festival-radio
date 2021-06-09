import React from 'react';
import './Main.css';
import { useDataLayerValue } from '../../DataLayer';
import SongRow from '../SongRow/SongRow';

function Main() {
    const [{ playingPlaylist, playingNow, playingTrack }, dispatch] = useDataLayerValue();

    const playSong = (track) => {
        (track === playingTrack)
            ? dispatch({
                type: "SET_PLAYING_NOW",
                playingNow: !playingNow,
            })
            : dispatch({
                type: "SET_PLAYING_TRACK",
                playingTrack: track,
            });
    }

    return (
        <main className="main">
            <div className='main__info'>
                <img className='main__logo' src={playingPlaylist?.image} alt='Playlist logo' />
                <div className='main__infoText'>
                    <h2 className='main__name'>{playingPlaylist?.name}</h2>
                    <p className='main__description'>{playingPlaylist?.description}</p>
                </div>
            </div>

            <div className="main__songs">
                {playingPlaylist?.tracks?.items.map((item, index) => (
                    < SongRow track={item.track} key={index} playSong={playSong} />
                ))}
            </div>
        </main>
    );
}

export default Main;