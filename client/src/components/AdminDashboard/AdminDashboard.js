import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';
import PrintData from './PrintData/PrintData'
import AddFestivalForm from './AddFestivalForm/AddFestivalForm'
import AddArtistForm from './AddArtistForm/AddArtistForm'
import AddPlaylistForm from './AddPlaylistForm/AddPlaylistForm'

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
        'artists': []
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

    function handleFestivalClick(item) {
        setPlaylistBase({
            'festivalId': item.id,
            'artists': [...playlistBase.artists],
        })
    }

    function handleArtistClick(item) {
        (playlistBase.artists.indexOf(item.id) === -1) &&
            setPlaylistBase({
                'festivalId': playlistBase.festivalId,
                'artists': [...playlistBase.artists, item.id],
            })
    }

    function handlePlaylistClick(item) {
        console.log('clicked on ', item);
    }

    function handleToggleForm(title) {
        const newForms = [...forms];
        const changedForm = newForms.find((f) => f.title === title);
        changedForm.visible = !changedForm.visible;
        setForms(newForms);
    }

    function submitFestivalForm(data) {
        axios.post(FestivalsUrl, {
            name: data.name,
            logo_url: data.logo_url
        })
            .then(res => axios.get(FestivalsUrl).then((res) => { setFestivals(res.data) }))
        handleToggleForm(FestivalsTitle);
    }

    function submitArtistForm(name) {
        console.log(name);
        axios.post(ArtistsUrl, {
            name: name,
        })
            .then(res => axios.get(ArtistsUrl).then((res) => { setArtists(res.data) }))
        handleToggleForm(ArtistsTitle);
    }

    function submitPlaylistForm(name) {
        axios.post(PlaylistsUrl, {
            festival_id: playlistBase.festivalId,
            artists: playlistBase.artists.join(','),
            name: name,
            spotify_token: accessToken
        })
            .then(res => axios.get(PlaylistsUrl).then((res) => { setPlaylists(res.data) }))
        handleToggleForm(PlaylistsTitle);
        setPlaylistBase({
            'festivalId': null,
            'artists': []
        })
    }

    return (
        <div className='admin'>
            <PrintData title={FestivalsTitle} data={festivals} onClick={handleFestivalClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === FestivalsTitle).visible && <AddFestivalForm onSubmit={submitFestivalForm} />}
            <PrintData title={ArtistsTitle} data={artists} onClick={handleArtistClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === ArtistsTitle).visible && <AddArtistForm onSubmit={submitArtistForm} />}
            <PrintData title={PlaylistsTitle} data={playlists} onClick={handlePlaylistClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === PlaylistsTitle).visible && <AddPlaylistForm onSubmit={submitPlaylistForm} />}

            <button onClick={handleReturn}> go back</button>
        </div>
    );
}

export default AdminDashboard;