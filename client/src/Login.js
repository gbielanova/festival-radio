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

function Login() {
    return (
        <div>
            {/* Should be here to reflect change in localStorage, will not work without refresh if href outside return */}
            <a href={`https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&show_dialog=${localStorage.getItem('loggedIn') !== 'true'}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`}>Login with Spotify</a>
        </div>
    );
}

export default Login;