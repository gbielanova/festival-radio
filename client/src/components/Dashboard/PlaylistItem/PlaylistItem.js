import React from 'react';
import './PlaylistItem.css';
import { useDataLayerValue } from '../../../DataLayer';


function PlaylistItem({ playlist }) {
    const [{ }, dispatch] = useDataLayerValue();

    function handleClick() {
        dispatch({
            type: "SET_PLAYLIST",
            playingPlaylist: playlist,
        });
        dispatch({
            type: "SET_PLAYING_TRACK",
            playingTrack: playlist.tracks.items[0].track,
        });
    }

    return (
        <div className='playlistItem' onClick={handleClick}>
            <img src={playlist.image} alt="Playlist cover" className="playlistItem__img" />
            <p className="playlistItem__name">{playlist.name}</p>
            <p className="playlistItem__description">{playlist.description}</p>
        </div>
    );
}

export default PlaylistItem;