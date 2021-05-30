import React from 'react';

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
]

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&show_dialog=true&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;


function Login() {
    return (
        <div>
            <a href={AUTH_URL}>Login with Spotify</a>
        </div>
    );
}

export default Login;