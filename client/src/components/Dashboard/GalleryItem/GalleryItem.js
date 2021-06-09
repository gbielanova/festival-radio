import React from 'react';
import './GalleryItem.css';
import { useDataLayerValue } from '../../../DataLayer';


function GalleryItem({ playlist }) {
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
        <div className='galleryItem' onClick={handleClick}>
            <img src={playlist.image} alt="Playlist cover" className="galleryItem__img" />
            <p className="galleryItem__name">{playlist.name}</p>
            <p className="galleryItem__description">{playlist.description}</p>
        </div>
    );
}

export default GalleryItem;