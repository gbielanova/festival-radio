import { useEffect } from 'react';
// import TrackSearchResult from './TrackSearchResult';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import SpotifyWebApi from 'spotify-web-api-node';
import './Dashboard.css';
import { useDataLayerValue } from '../../DataLayer';


const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
});

function Dashboard() {
    const [{ accessToken, playingPlaylist }, dispatch] = useDataLayerValue();

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

        ['7p1LpBuLf9PmgSBUETVVp3', '5CoK6RaL736tRsPpv3yTe6', '37i9dQZF1EppukfMttZO5c', '2Y89KNJyNefO0heawqqQxA'].map(id => (
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

    }, [accessToken, dispatch])

    return (
        <div>
            <section className="dashboard">
                <Sidebar />
                {playingPlaylist ? <Main /> : <Gallery />}

            </section>
            <Footer />
        </div >
    );
}

export default Dashboard;