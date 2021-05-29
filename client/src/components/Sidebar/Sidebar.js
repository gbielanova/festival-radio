import React from 'react';
import './Sidebar.css';
import SidebarItem from '../SidebarItem/SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from '../../DataLayer';
import spotifyLogo from '../../resources/img/spotifyLogo.svg';


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    function choosePlaylist(playlist) {
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
        <aside className='sidebar'>
            <div className='sidebar__header'>
                <img className='sidebar__logo' src={spotifyLogo} alt="Spotify logo"></img>
                <SidebarItem title="Home" Icon={HomeIcon} />
                <SidebarItem title="Search" Icon={SearchIcon} />
                <h3 className='sidebar__title'>PLAYLISTS</h3>
            </div>


            { playlists?.map(paylist => (
                <SidebarItem playlist={paylist} key={paylist.id} choosePlaylist={choosePlaylist} />
            ))}

        </aside>
    );
}

export default Sidebar;