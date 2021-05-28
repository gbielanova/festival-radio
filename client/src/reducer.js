export const initialState = {
    user: null,
    playlists: [],
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
    premium: false,
    spotify: null,
    player: null,
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                user: action.user,
            };
        }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_ACCESS_TOKEN':
            return {
                ...state,
                accessToken: action.accessToken,
            };
        case 'SET_REFRESH_TOKEN':
            return {
                ...state,
                refreshToken: action.refreshToken,
            };
        case 'SET_EXPIRES_IN':
            return {
                ...state,
                expiresIn: action.expiresIn,
            };
        case 'SET_PREMIUM':
            return {
                ...state,
                premium: action.premium,
            };
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
        case "SET_PLAYER":
            return {
                ...state,
                player: action.player,
            };
        default:
            return state;
    }
}

export default reducer;