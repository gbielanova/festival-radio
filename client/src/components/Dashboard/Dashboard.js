import { useEffect } from 'react';
import './Dashboard.css';
import { useDataLayerValue } from '../../DataLayer';
import axios from 'axios';
import SpotifyWebApi from 'spotify-web-api-node';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import Gallery from './Gallery/Gallery';
import Header from './Header/Header';
import Player from './Player/Player';


const PlaylistsUrl = 'http://ec2-52-51-232-161.eu-west-1.compute.amazonaws.com/api/playlist/';

const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
});

function Dashboard() {
    const [{ accessToken, playingPlaylist, festival, playlists }, dispatch] = useDataLayerValue();

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
        sessionStorage.removeItem('state');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('refreshToken');
        sessionStorage.removeItem('expiresIn');
        sessionStorage.removeItem('selectedFestival');
    }

    useEffect(() => {
        if (!accessToken) return;

        spotifyApi.setAccessToken(accessToken);

        function logout() {
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
        }).catch((error) => { console.log(error); logout() });

        axios.get(PlaylistsUrl)
            .then(res => {
                let ids = res.data.filter(
                    (el) => el.festival_id === festival.id)
                    .map((el) => el.playlist_id);
                ids.map(id => (
                    spotifyApi.getPlaylist(id).then(res => {
                        let currentPlaylists = playlists.map((el) => el.id);
                        (currentPlaylists.indexOf(id) === -1) &&
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
                    }).catch((error) => { console.log(error); logout() })
                ));
            }
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken, dispatch, festival.id])

    return (
        <div>
            <section className="dashboard">
                <Sidebar />
                <main className='main__wrapper'>
                    <Header handleClick={handleClick} />
                    {playingPlaylist ? <Main /> : <Gallery />}
                </main>
            </section>
            <Player />
        </div >
    );
}

export default Dashboard;