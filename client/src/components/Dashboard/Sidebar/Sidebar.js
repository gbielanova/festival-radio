import React from 'react';
import './Sidebar.css';
import { useDataLayerValue } from '../../../DataLayer';
import SidebarItem from '../SidebarItem/SidebarItem';
import spotifyLogo from '../../../resources/img/spotifyLogo.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';


function Sidebar() {
    const [{ playlists, favorites, festival }, dispatch] = useDataLayerValue();

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

    function handleClick() {
        dispatch({
            type: "SET_FESTIVAL",
            festival: null,
        });
        sessionStorage.removeItem('selectedFestival');
    }

    return (
        <aside className='sidebar'>
            <header className='sidebar__header'>
                <div className="sidebar__logos">
                    <img className='sidebar__logo' src={spotifyLogo} alt="Spotify logo"></img>
                    <img className='sidebar__logo' src={festival.logo_url} alt="Festival logo"></img>
                </div>
                <SidebarItem title="Home" Icon={HomeIcon} onClick={handleClick} />
            </header>

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