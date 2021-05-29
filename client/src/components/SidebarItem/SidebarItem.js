import React from 'react';
import './SidebarItem.css';

function SidebarItem({ title, playlist, Icon, choosePlaylist }) {

    function handlePlaylistClick() {
        choosePlaylist && choosePlaylist(playlist);
    }

    return (
        <div className="sidebarItem" onClick={handlePlaylistClick.bind(this)}>
            {Icon && <Icon className='sidebarItem__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{playlist.name}</p>}
        </div>
    );
}

export default SidebarItem;
