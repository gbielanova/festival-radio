import { useState, useEffect } from 'react';
import useAuth from '../../useAuth';
// import TrackSearchResult from './TrackSearchResult';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SpotifyWebApi from 'spotify-web-api-node';
import './Dashboard.css';


const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
});

function Dashboard({ code }) {
    const accessToken = useAuth(code);
    // const [search, setSearch] = useState("");
    // const [searchResults, setSearchResults] = useState([]);
    // const [playingTrack, setPlayingTrack] = useState();
    const [premium, setPremium] = useState(false);

    // function chooseTrack(track) {
    //     setPlayingTrack(track);
    //     setSearch('');
    // }

    useEffect(() => {
        if (!accessToken) return;
        spotifyApi.setAccessToken(accessToken);
        spotifyApi.getMe().then(res => { if (res.body.product !== 'open') { setPremium(true) } });
    }, [accessToken])

    // useEffect(() => {
    //     if (!search) return setSearchResults([]);
    //     if (!accessToken) return;

    //     let cancel = false;

    //     spotifyApi.searchTracks(search).then(res => {
    //         if (cancel) return;
    //         setSearchResults(res.body.tracks.items.map(track => {
    //             const smallestAlbumImage = track.album.images.reduce(
    //                 (smallest, image) => {
    //                     if (image.height < smallest.height) return image;
    //                     return smallest
    //                 }, track.album.images[0])

    //             return {
    //                 artist: track.artists[0].name,
    //                 title: track.name,
    //                 uri: track.uri,
    //                 albumUrl: smallestAlbumImage.url
    //             }
    //         }))
    //     });

    //     return () => cancel = true;
    // }, [search, accessToken])

    return (
        <div>
            <section className="dashboard">
                <Sidebar />
                <Main />
            </section>
            <Footer premium={premium} accessToken={accessToken} />
        </div >
    );
}

export default Dashboard;