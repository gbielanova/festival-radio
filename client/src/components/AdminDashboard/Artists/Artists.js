import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddArtistForm from '../AddArtistForm/AddArtistForm'

const ArtistsUrl = "http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/artist/";

function Artists(props) {
    const [artists, setArtists] = useState([]);
    const [addFormActive, setAddFormActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(ArtistsUrl);
            setArtists(result.data);
        };

        fetchData();
    }, []);

    function addArtist() {
        setAddFormActive(true);
    }

    function handleAddArtist(data) {
        axios.post(ArtistsUrl, {
            name: data,
        })
            .then(res => {
                setAddFormActive(false);
                axios.get(ArtistsUrl).then(res => setArtists(res.data))
            })
    }

    return (
        <div>
            {artists.map(
                (item) =>
                    <p key={item.id} onClick={() => props.onClick(item.id)}>{item.name}</p>
            )}
            <AddCircleIcon onClick={addArtist} />
            {addFormActive && <AddArtistForm onSubmit={handleAddArtist} />}
        </div>
    );
}

export default Artists;