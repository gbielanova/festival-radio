import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'
import { useDataLayerValue } from '../../DataLayer';
import PrintData from './PrintData/PrintData'
import AddForm from './AddForm/AddForm'

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
        'artists': [],
        'playlistId': null
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
        let newId = null;
        (item.id !== playlistBase.festivalId) && (newId = item.id);
        setPlaylistBase({
            'festivalId': newId,
            'artists': [...playlistBase.artists],
            'playlistId': null,
        })
    }

    function handleArtistClick(item) {
        let newArtists = [...playlistBase.artists];
        (playlistBase.artists.indexOf(item.id) === -1)
            ? newArtists.push(item.id)
            : newArtists.splice(playlistBase.artists.indexOf(item.id), 1)

        setPlaylistBase({
            'festivalId': playlistBase.festivalId,
            'artists': newArtists,
            'playlistId': null,
        })
    }

    function handlePlaylistClick(item) {
        let newId = null;
        (item.id !== playlistBase.playlistId) && (newId = item.id);
        setPlaylistBase({
            'festivalId': item.festival_id,
            'artists': item.artists.split(',').map((el) => +el),
            'playlistId': newId,
        })
    }

    function handleToggleForm(title) {
        const newForms = [...forms];
        const changedForm = newForms.find((f) => f.title === title);
        changedForm.visible = !changedForm.visible;
        setForms(newForms);
    }

    function submitFestivalForm(data) {
        let errorText = '';
        let formatError = 0;
        (!data.name) && (errorText += `Please enter name <br>`);
        if (!data.logo_url) errorText += 'Please enter url for logo'
        else {
            ['http', '.jpg', '.png', 'svg'].forEach(
                (el) => { (!data.logo_url.includes(el)) && (formatError += 1) });
            (formatError !== 2) && (errorText += 'Please enter valid url, file format should be jpg, svg or png.')
        }

        if (errorText === '') {
            axios.post(FestivalsUrl, {
                name: data.name,
                logo_url: data.logo_url
            })
                .then(res => axios.get(FestivalsUrl).then((res) => { setFestivals(res.data) }));
            handleToggleForm(FestivalsTitle)
        }
        else { document.getElementsByClassName('form__error')[0].innerHTML = errorText }
    }

    function submitArtistForm(data) {
        let errorText = '';
        (!data.name) && (errorText += 'Please enter name');

        if (errorText === '') {
            axios.post(ArtistsUrl, {
                name: data.name,
            })
                .then(res => axios.get(ArtistsUrl).then((res) => { setArtists(res.data) }))
            handleToggleForm(ArtistsTitle);
        }
        else {
            // Here where shit code starts. I don't know which input it will be, but it will be either 0 or 1 
            // depends if festivals form open
            let idx = 0;
            (document.getElementsByClassName('form__error').length > 1) && (idx = 1);
            document.getElementsByClassName('form__error')[idx].innerHTML = errorText
        }
    }

    function submitPlaylistForm(data) {
        let errorText = '';
        (!data.name) && (errorText += `Please enter name <br>`);
        (!playlistBase.festivalId || playlistBase.artists.length === 0) &&
            (errorText += 'Please select Festival and Artists');

        if (errorText === '') {
            axios.post(PlaylistsUrl, {
                festival_id: playlistBase.festivalId,
                artists: playlistBase.artists.join(','),
                name: data.name,
                spotify_token: accessToken
            })
                .then(res => axios.get(PlaylistsUrl).then((res) => { setPlaylists(res.data) }))
            handleToggleForm(PlaylistsTitle);
            setPlaylistBase({
                'festivalId': null,
                'artists': []
            })
        }
        else {
            // Some more code i'm not proud of. this input always will be the last one
            let idx = document.getElementsByClassName('form__error').length - 1;
            document.getElementsByClassName('form__error')[idx].innerHTML = errorText
        }

    }

    return (
        <main className='admin'>
            <header className="admin__header">
                <button className='admin__button' onClick={handleReturn}>Back to music</button>
                <div className="admin__instructions">
                    <p className='admin__help' onClick={handleReturn}>Select festival...</p>
                    <p className='admin__help' onClick={handleReturn}>Select artists...</p>
                    <p className='admin__help' onClick={handleReturn}>Finally press '+' to create a new playlist with selected artists!</p>
                    <p className='admin__help' onClick={handleReturn}>Forgot what playlist contains? No problems, just click on it!</p>
                </div>
            </header>
            <PrintData title={FestivalsTitle} selectedData={playlistBase.festivalId} data={festivals} onClick={handleFestivalClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === FestivalsTitle).visible && <AddForm onSubmit={submitFestivalForm} placeholder='Festival name' logo_placeholder='Logo url' />}
            <PrintData title={ArtistsTitle} selectedData={playlistBase.artists} data={artists} onClick={handleArtistClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === ArtistsTitle).visible && <AddForm onSubmit={submitArtistForm} placeholder='Artist name' />}
            <PrintData title={PlaylistsTitle} selectedData={playlistBase.playlistId} data={playlists} onClick={handlePlaylistClick} openForm={handleToggleForm} />
            {forms.find((f) => f.title === PlaylistsTitle).visible && <AddForm onSubmit={submitPlaylistForm} placeholder='Playlist name' />}
        </main>
    );
}

export default AdminDashboard;