import { useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback";
import { useDataLayerValue } from '../../DataLayer';
import SpotifyWebApi from 'spotify-web-api-node';

const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const spotifyApi = new SpotifyWebApi({
    clientId: clientId,
});

function Player() {
    const [{ accessToken, playingPlaylist, playingTrack }, dispatch] = useDataLayerValue();

    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [playingPlaylist, playingTrack]);

    if (!accessToken) return null;

    const playingUris = playingPlaylist?.tracks.items.map((item) => item.track.uri);

    spotifyApi.setAccessToken(accessToken);

    return (
        < SpotifyPlayer
            token={accessToken}
            callback={
                state => {
                    if (!state.isPlaying) setPlay(false)
                    if (state?.track?.id !== playingTrack?.id) {
                        let track = playingPlaylist?.tracks.items.filter(item => item?.track.id === state?.track?.id)[0];
                        if (track)
                            dispatch({
                                type: "SET_PLAYING_TRACK",
                                playingTrack: track.track,
                            });
                    }

                }
            }
            play={play}
            uris={playingPlaylist ? playingUris : []}
            offset={playingTrack ? playingUris.indexOf(playingTrack.uri) : 0}
            styles={{
                bgColor: '#282828',
                color: '#fff',
                trackNameColor: '#fff',
                sliderColor: '#1ed760',
            }} />
    );
}

export default Player;