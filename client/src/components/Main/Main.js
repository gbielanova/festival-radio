import React from 'react';
import './Main.css';
import { useDataLayerValue } from '../../DataLayer';
import SongRow from '../SongRow/SongRow';

function Main(props) {
    const [{ playingPlaylist }] = useDataLayerValue();

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
                {playingPlaylist?.tracks.items.map(item => (
                    <SongRow track={item.track} key={item.track.id} />
                ))}
            </div>
        </main>
    );
}

export default Main;