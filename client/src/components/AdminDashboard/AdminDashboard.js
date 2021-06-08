import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';
import PrintData from '../AdminDashboard/PrintData/PrintData'

const FestivalsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/';
const ArtistsUrl = "http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/artist/";
const PlaylistsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/';


function AdminDashboard(props) {
    const [{ accessToken }, dispatch] = useDataLayerValue();
    const [festivals, setFestivals] = useState([]);
    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);

    const [playlistBase, setPlaylistBase] = useState({
        'festivalId': null,
        'artists': ''
    })

    useEffect(() => {
        axios.get(FestivalsUrl).then((res) => { setFestivals(res.data) })
        axios.get(ArtistsUrl).then((res) => { setArtists(res.data) })
        axios.get(PlaylistsUrl).then((res) => { setPlaylists(res.data) })
    }, []);

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

    function handlePrintDataClick(id) {
        console.log('clicked on ', id);
    }

    function handleOpenForm(title) {
        console.log('open form to add ', title)
    }

    return (
        <div className='admin'>
            <PrintData title='Festivals' data={festivals} onClick={handlePrintDataClick} openForm={handleOpenForm} />
            <PrintData title='Artists' data={artists} onClick={handlePrintDataClick} openForm={handleOpenForm} />
            <PrintData title='Playlists' data={playlists} onClick={handlePrintDataClick} openForm={handleOpenForm} />

            {/* <FestivalsForm onChange={handleFestivalChange} /> */}
            {/* <Artists onClick={handleArtistsClick} />
            <AddPlaylistForm data={playlistBase} token={accessToken} /> */}
            {/* <button onClick={handleReturn}> go back</button> */}
        </div>
    );
}

export default AdminDashboard;