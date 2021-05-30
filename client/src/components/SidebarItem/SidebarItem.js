import React from 'react';
import './SidebarItem.css';
import { useDataLayerValue } from '../../DataLayer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SidebarItem({ title, playlist, Icon, choosePlaylist, Favorite, cName }) {
    const [{ playingPlaylist, favorites }, dispatch] = useDataLayerValue();

    function handlePlaylistClick() {
        choosePlaylist && choosePlaylist(playlist);
    }

    function handleFavoriteClick() {
        let newFavorites = favorites ? [...favorites] : [];

        (newFavorites.indexOf(playlist.id) === -1)
            ? newFavorites = newFavorites ? [...newFavorites, playlist.id] : [playlist.id]
            : newFavorites.splice(newFavorites.indexOf(playlist.id), 1);

        dispatch({
            type: "SET_FAVORITES",
            favorites: newFavorites,
        });
        localStorage.setItem('favorites', newFavorites);
    }

    let activePlaylist = (playingPlaylist === playlist);

    return (
        <div className={`sidebarItem ${activePlaylist ? 'sidebarItem-active' : ''}`} >
            {activePlaylist && <PlayArrowIcon />}
            {Icon && <Icon className='sidebarItem__icon' />}
            {Icon ? <h4>{title}</h4> : <p className='sidebarItem__text' onClick={handlePlaylistClick}>{playlist.name}</p>}
            {Favorite && <Favorite className={`sidebarItem__favorite ${cName || ''}`} onClick={handleFavoriteClick} />}
        </div>
    );
}

export default SidebarItem;
