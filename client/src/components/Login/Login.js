import React from 'react';
import './Login.css'

const redirectUri = 'http://localhost:3000/';
const clientId = 'afa5c44e65bc40928f489b6bff9d91fe';

const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-library-read',
    'user-library-modify',
    'user-read-playback-state',
    'user-modify-playback-state',
    'playlist-modify-private',
    'playlist-read-private'
]

function Login({ text, cName, state }) {
    function handleClick() {
        sessionStorage.setItem('state', state);
    }

    return (
        <div>
            {/* Should be here to reflect change in sessionStorage, will not work without refresh if href outside return */}
            <a
                className={cName}
                onClick={handleClick}
                href={`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&show_dialog=${sessionStorage.getItem('loggedIn') !== 'true'}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`}>{text}</a>
        </div>
    );
}

export default Login;