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

        ['5VVoHEuqZBs6kATsF7nLTS', '6ihAiSvGzfRkBZFf8F2vL9', '3iQL47pHJ9YeAbSeXv4Zbp', 
        '5unwHGGK3FdtuCuREik2xv', '13maJFCugAJicrteZ095TD', '5R8E4lPChZ7l6dNrihfFQS', 
        '3ivG9ZxjtnERiJWQtyJYFC', '0t1rNc9h9MnPVJcotS0Bng', '4f9CawPddxzOUSJUKj68TQ', 
        '6bHiAAxR0CLBOozXSyGfrz', '3KxnnQenLSYEMNuTh4gsxm'].map(id => (
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