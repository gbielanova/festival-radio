import React from 'react';
import './SidebarItem.css';
import { useDataLayerValue } from '../../DataLayer';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function SidebarItem({ title, playlist, Icon, choosePlaylist }) {
    const [{ playingPlaylist }] = useDataLayerValue();

    function handlePlaylistClick() {
        choosePlaylist && choosePlaylist(playlist);
    }

    let activePlaylist = playingPlaylist === playlist;

    return (
        <div className={`sidebarItem ${activePlaylist && 'sideItem-active'}`} onClick={handlePlaylistClick.bind(this)}>
            {activePlaylist && <PlayArrowIcon />}
            {Icon && <Icon className='sidebarItem__icon' />}
            {Icon ? <h4>{title}</h4> : <p>{playlist.name}</p>}
        </div>
    );
}

export default SidebarItem;
