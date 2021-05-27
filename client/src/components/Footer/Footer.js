import React from 'react';
import './Footer.css';
import Player from '../Player/Player';


function Footer({ premium, accessToken }) {
    return (
        <footer className="footer">
            {
                (premium) ?
                    <Player accessToken={accessToken} /> :
                    // <Player accessToken={accessToken} trackUri={playingTrack?.uri} /> :
                    <p>Player available only for premium users </p>
            }
        </footer>
    );
}

export default Footer;