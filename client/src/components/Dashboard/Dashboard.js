import { useEffect } from 'react';
// import TrackSearchResult from './TrackSearchResult';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import SpotifyWebApi from 'spotify-web-api-node';
import './Dashboard.css';
import { useDataLayerValue } from '../../DataLayer';
import axios from 'axios';

const PlaylistsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/';

const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
});

function Dashboard() {
    const [{ accessToken, playingPlaylist, festival }, dispatch] = useDataLayerValue();

    function handleClick() {
        dispatch({
            type: "SET_ACCESS_TOKEN",
            user: null,
        });
        dispatch({
            type: "SET_REFRESH_TOKEN",
            user: null,
        });
        dispatch({
            type: "SET_EXPIRES_IN",
            user: null,
        });
        dispatch({
            type: "SET_FESTIVAL",
            user: null,
        });
        sessionStorage.setItem('loggedIn', false);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('selectedFestival');
    }

    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.setAccessToken(accessToken);

        spotifyApi.getMe().then(res => {
            dispatch({
                type: "SET_USER",
                user: res.body,
            });

            if (res.body.product !== 'open') {
                dispatch({
                    type: "SET_PREMIUM",
                    premium: true,
                });
            }
        });

        axios.get(PlaylistsUrl)
            .then(res => {
                let ids = res.data.filter(
                    (el) => el.festival_id === festival.id)
                    .map((el) => el.playlist_id);
                ids.map(id => (
                    spotifyApi.getPlaylist(id).then(res => {
                        dispatch({
                            type: "SET_PLAYLISTS",
                            playlist: {
                                description: res.body.description,
                                name: res.body.name,
                                id: res.body.id,
                                href: res.body.href,
                                tracks: res.body.tracks,
                                image: res.body.images[0].url,
                            },
                        });
                    })
                ));
            }
            )
    }, [accessToken, dispatch, festival.id])

    return (
        <div>
            <section className="dashboard">
                <Sidebar />
                <div className='main__wrapper'>
                    <Header handleClick={handleClick} />
                    {playingPlaylist ? <Main /> : <Gallery />}
                </div>
            </section>
            <Footer />
        </div >
    );
}

export default Dashboard;