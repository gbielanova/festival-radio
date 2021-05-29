export const initialState = {
    user: null,
    playlists: [],
    playingPlaylist: null,
    activeSidebarItem: null,
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
    premium: false,
    playingTrack: null,
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
                playlists: [...state.playlists, action.playlist],
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playingPlaylist: action.playlist,
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
        case "SET_PLAYING_TRACK":
            return {
                ...state,
                playingTrack: action.playingTrack,
            };
        default:
            return state;
    }
}

export default reducer;