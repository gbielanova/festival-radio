import { useEffect } from 'react';
import './Player.css'
import { useDataLayerValue } from '../../../DataLayer';
import SpotifyPlayer from "react-spotify-web-playback";
import SpotifyWebApi from 'spotify-web-api-node';

const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
});

function Player() {
    const [{ accessToken, playingPlaylist, playingTrack, playingNow }, dispatch] = useDataLayerValue();

    useEffect(() =>
        dispatch({
            type: "SET_PLAYING_NOW",
            playingNow: true,
        }), [dispatch, playingPlaylist]);

    if (!accessToken) return null;

    const playingUris = playingPlaylist?.tracks.items.map((item) => item.track.uri);

    spotifyApi.setAccessToken(accessToken);

    return (
        <footer className="footer">
            < SpotifyPlayer
                token={accessToken}
                callback={
                    state => {
                        if (playingNow !== state.isPlaying)
                            dispatch({
                                type: "SET_PLAYING_NOW",
                                playingNow: state.isPlaying,
                            });
                        if (state?.track?.id !== playingTrack?.id) {
                            let track = playingPlaylist?.tracks.items.filter(item => item?.track.id === state?.track?.id)[0];
                            if (track && track.track !== playingTrack)
                                dispatch({
                                    type: "SET_PLAYING_TRACK",
                                    playingTrack: track.track,
                                });
                        }

                    }
                }
                play={playingNow}
                uris={playingPlaylist ? playingUris : []}
                offset={playingTrack ? playingUris.indexOf(playingTrack.uri) : 0}
                styles={{
                    bgColor: '#282828',
                    color: '#fff',
                    trackNameColor: '#fff',
                    sliderColor: '#1ed760',
                }} /></footer>
    );
}

export default Player;