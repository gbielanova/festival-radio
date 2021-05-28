import { useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback"
import { useDataLayerValue } from '../../DataLayer';

function Player({ trackUri }) {
    const [{ accessToken }] = useDataLayerValue();

    const [play, setPlay] = useState(false);

    useEffect(() => setPlay(true), [trackUri]);

    if (!accessToken) return null;

    return (
        < SpotifyPlayer
            token={accessToken}
            callback={
                state => {
                    if (!state.isPlaying) setPlay(false);
                }
            }
            play={play}
            uris={trackUri ? [trackUri] : []}
            styles={{
                bgColor: '#282828',
                color: '#fff',
            }} />
    );
}

export default Player;