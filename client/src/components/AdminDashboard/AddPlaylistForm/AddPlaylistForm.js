import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaylistsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/';

function AddPlaylistForm({ data, token }) {
    const [playlists, setPlaylists] = useState([]);
    const [name, setName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(PlaylistsUrl);
            setPlaylists(result.data);
        };
        fetchData();
    }, []);

    function handleFormChange(event) {
        setName(event.target.value);
    }

    function submitForm(event) {
        event.preventDefault();
        axios.post(PlaylistsUrl, {
            festival_id: +data.festivalId,
            artists: data.artists.toString(),
            name: name,
            spotify_token: token
        })
            .then(res => {
                axios.get(PlaylistsUrl).then(res => setPlaylists(res.data))
            })
        event.target.reset();
    }

    return (
        <div>
            {playlists.map(
                (item) =>
                    <p key={item.id}>{item.name}</p>
            )}
            <form onSubmit={(e) => submitForm(e)}>
                <input id='name' type="text" placeholder="Playlist name" onChange={e => handleFormChange(e)} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddPlaylistForm;