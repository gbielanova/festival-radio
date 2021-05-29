import { useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback";
import { useDataLayerValue } from '../../DataLayer';

function Player() {
    const [{ accessToken, playingPlaylist, playingTrack }] = useDataLayerValue();

    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [playingTrack]);

    if (!accessToken) return null;

    const playingUris = playingPlaylist?.tracks.items.map((item) => item.track.uri);

    return (
        < SpotifyPlayer
            token={accessToken}
            callback={
                state => {
                    if (!state.isPlaying) setPlay(false);
                }
            }
            play={play}
            uris={playingPlaylist ? playingUris : []}
            offset={playingTrack ? playingUris.indexOf(playingTrack.uri) : 0}
            styles={{
                bgColor: '#282828',
                color: '#fff',
            }} />
    );
}

export default Player;