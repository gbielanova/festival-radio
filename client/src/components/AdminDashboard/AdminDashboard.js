import React, { useState, useEffect } from 'react';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';
import FestivalsForm from '../AdminDashboard/FestivalsForm/FestivalsForm'
import Artists from './Artists/Artists';

function AdminDashboard(props) {
    const [{ accessToken }, dispatch] = useDataLayerValue();
    const [playlistBase, setPlaylistBase] = useState({
        'festivalId': null,
        'artists': ''
    })

    function handleReturn() {
        sessionStorage.removeItem('state');
        dispatch({
            type: "SET_FESTIVAL",
            user: null,
        });
    }

    function handleFestivalChange(festivalId) {
        setPlaylistBase({
            'festivalId': festivalId,
            'artists': [...playlistBase.artists]
        });
    }

    function handleArtistsClick(artistId) {
        [...playlistBase.artists].indexOf(artistId) === -1 &&
            setPlaylistBase({
                'festivalId': playlistBase.festivalId,
                'artists': [...playlistBase.artists, artistId]
            });
    }

    return (
        <div>
            <FestivalsForm onChange={handleFestivalChange} />
            <Artists onClick={handleArtistsClick} />
            {console.log(playlistBase)}
            {/* <button onClick={handleReturn}> go back</button> */}
        </div>
    );
}

export default AdminDashboard;