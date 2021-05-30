import React from 'react';
import './Sidebar.css';
import SidebarItem from '../SidebarItem/SidebarItem';
import HomeIcon from '@material-ui/icons/Home';
import { useDataLayerValue } from '../../DataLayer';
import spotifyLogo from '../../resources/img/spotifyLogo.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Sidebar() {
    const [{ playlists, favorites }, dispatch] = useDataLayerValue();

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
            </div>

            <h3 className='sidebar__title'>FAVORITE</h3>
            {playlists?.map(playlist => (
                favorites.indexOf(playlist.id) !== -1 &&
                < SidebarItem playlist={playlist} key={playlist.id} choosePlaylist={choosePlaylist} Favorite={FavoriteIcon} cName='sidebarItem-favorite' />
            ))}

            <h3 className='sidebar__title'>PLAYLISTS</h3>
            { playlists?.map(playlist => (
                favorites.indexOf(playlist.id) === -1 &&
                < SidebarItem playlist={playlist} key={playlist.id} choosePlaylist={choosePlaylist} Favorite={FavoriteIcon} />
            ))}

        </aside>
    );
}

export default Sidebar;