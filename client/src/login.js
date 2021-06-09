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

function login(state) {
    sessionStorage.setItem('state', state);
    const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&show_dialog=${sessionStorage.getItem('loggedIn') !== 'true'}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}`;
    window.location.href = url;
}

export default login;