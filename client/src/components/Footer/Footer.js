import React from 'react';
import './Footer.css';
import Player from '../Player/Player';


function Footer() {
    return (
        <footer className="footer">
            {
                <Player />
                // (premium) ?
                //     <Player accessToken={accessToken} /> :
                //     <p>Player available only for premium users </p>
            }
        </footer>
    );
}

export default Footer;