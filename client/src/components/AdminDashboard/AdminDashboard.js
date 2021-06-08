import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';
import PrintData from '../AdminDashboard/PrintData/PrintData'
import AddFestivalForm from '../AdminDashboard/AddFestivalForm/AddFestivalForm'

const FestivalsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/festival/';
const ArtistsUrl = "http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/artist/";
const PlaylistsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/';

const FestivalsTitle = 'Festivals';
const ArtistsTitle = 'Artists';
const PlaylistsTitle = 'Playlists';

function AdminDashboard(props) {
    const [{ accessToken }, dispatch] = useDataLayerValue();
    const [festivals, setFestivals] = useState([]);
    const [artists, setArtists] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [forms, setForms] = useState([
        { title: FestivalsTitle, visible: false },
        { title: ArtistsTitle, visible: false },
        { title: PlaylistsTitle, visible: false },
    ])

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

    function handleToggleForm(title) {
        const newForms = [...forms];
        const changedForm = newForms.find((f) => f.title === title);
        changedForm.visible = !changedForm.visible;
        setForms(newForms);
    }

    function submitFestivalForm(data) {
        handleToggleForm(FestivalsTitle);
        axios.post(FestivalsUrl, {
            name: data.name,
            logo_url: data.logo_url
        })
            .then(res => axios.get(FestivalsUrl).then((res) => { setFestivals(res.data) }))
    }

    return (
        <div className='admin'>
            <PrintData title={FestivalsTitle} data={festivals} onClick={handlePrintDataClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === FestivalsTitle).visible && <AddFestivalForm onSubmit={submitFestivalForm} />}
            <PrintData title={ArtistsTitle} data={artists} onClick={handlePrintDataClick} openForm={handleToggleForm} />
            <PrintData title={PlaylistsTitle} data={playlists} onClick={handlePrintDataClick} openForm={handleToggleForm} />

            {/* <FestivalsForm onChange={handleFestivalChange} /> */}
            {/* <Artists onClick={handleArtistsClick} />
            <AddPlaylistForm data={playlistBase} token={accessToken} /> */}
            {/* <button onClick={handleReturn}> go back</button> */}
        </div>
    );
}

export default AdminDashboard;