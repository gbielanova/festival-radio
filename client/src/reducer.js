export const initialState = {
    user: null,
    playlists: [],
    favorites: localStorage.getItem('favorites')?.split(',') || [],
    playingPlaylist: null,
    activeSidebarItem: null,
    accessToken: sessionStorage.getItem('token') || null,
    refreshToken: null,
    expiresIn: null,
    premium: false,
    playingTrack: null,
    festival: JSON.parse(sessionStorage.getItem('selectedFestival')) || null,
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
                playlists: action.playlists && [...state.playlists, action.playlist],
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playingPlaylist: action.playingPlaylist,
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
        case "SET_FAVORITES":
            return {
                ...state,
                favorites: action.favorites,
            };
        case "SET_FESTIVAL":
            return {
                ...state,
                festival: action.festival,
            };
        default:
            return state;
    }
}

export default reducer;