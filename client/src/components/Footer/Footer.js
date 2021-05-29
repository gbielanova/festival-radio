import React from 'react';
import './Footer.css';
import Player from '../Player/Player';
import { useDataLayerValue } from '../../DataLayer';


function Footer() {
    const [{ accessToken, premium }] = useDataLayerValue();

    return (
        <footer className="footer">
            {
                (premium) ?
                    <Player accessToken={accessToken} /> :
                    <p>Player available only for premium users </p>
            }
        </footer>
    );
}

export default Footer;