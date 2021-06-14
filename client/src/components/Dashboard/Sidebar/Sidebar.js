import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { useDataLayerValue } from '../../../DataLayer';
import SidebarItem from '../SidebarItem/SidebarItem';
import spotifyLogo from '../../../resources/img/spotifyLogo.svg';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const MaxWidth = 768;

function Sidebar() {
    const [{ playlists, favorites, festival }, dispatch] = useDataLayerValue();
    const [isSidebarVisibleMobile, setIsSidebarVisibleMobile] = useState(false);
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })

        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

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

    function handleSidebarMobileClick() {
        (window.innerWidth <= MaxWidth) ? setIsSidebarVisibleMobile(true) : setIsSidebarVisibleMobile(false);
        (isSidebarVisibleMobile) && setIsSidebarVisibleMobile(false);
    }

    return (
        <aside className={`sidebar ${isSidebarVisibleMobile ? 'mobile' : ''}`} onClick={event => handleSidebarMobileClick(event)}>
            {
                ((dimensions.width <= MaxWidth) && !isSidebarVisibleMobile)
                    ?
                    <MenuIcon fontSize="large" className='sidebar__burger' tabIndex={0} />
                    :
                    <>
                        <header className='sidebar__header'>
                            <div className="sidebar__logos">
                                <img className='sidebar__logo' src={spotifyLogo} alt="Spotify logo"></img>
                                <img className='sidebar__logo' src={festival.logo_url} alt="Festival logo"></img>
                            </div>
                            <SidebarItem title="Home" Icon={HomeIcon} onClick={handleClick} />
                        </header>

                        <h3 className='sidebar__title'>FAVORITE</h3>
                        {
                            playlists?.map(playlist => (
                                favorites.indexOf(playlist.id) !== -1 &&
                                < SidebarItem playlist={playlist} key={playlist.id} choosePlaylist={choosePlaylist} Favorite={FavoriteIcon} cName='sidebarItem-favorite' />
                            ))
                        }

                        <h3 className='sidebar__title'>PLAYLISTS</h3>
                        {
                            playlists?.map(playlist => (
                                favorites.indexOf(playlist.id) === -1 &&
                                < SidebarItem playlist={playlist} key={playlist.id} choosePlaylist={choosePlaylist} Favorite={FavoriteIcon} />
                            ))
                        }
                    </>
            }
        </aside>
    );
}

export default Sidebar;