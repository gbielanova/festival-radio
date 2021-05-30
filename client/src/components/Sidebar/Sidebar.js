import React from 'react';
import './Sidebar.css';
import SidebarItem from '../SidebarItem/SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import { useDataLayerValue } from '../../DataLayer';
import spotifyLogo from '../../resources/img/spotifyLogo.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
                <h3 className='sidebar__title'>FAVORITE</h3>
                <h3 className='sidebar__title'>PLAYLISTS</h3>
            </div>


            { playlists?.map(paylist => (
                <SidebarItem playlist={paylist} key={paylist.id} choosePlaylist={choosePlaylist} Favorite={FavoriteIcon} />
            ))}

        </aside>
    );
}

export default Sidebar;