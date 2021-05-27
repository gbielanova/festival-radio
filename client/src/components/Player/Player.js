import { useState, useEffect } from 'react';
import SpotifyPlayer from "react-spotify-web-playback"

function Player({ accessToken, trackUri }) {
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