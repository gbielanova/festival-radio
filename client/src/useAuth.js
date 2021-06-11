import { useEffect } from 'react';
import axios from 'axios';
import { useDataLayerValue } from './DataLayer';

const serverLoginURL = 'http://52.51.232.161:3001/login';
const serverRefreshURL = 'http://52.51.232.161:3001/refresh';
// const serverLoginURL = 'http://localhost:3001/login';
// const serverRefreshURL = 'http://localhost:3001/refresh';

function useAuth(code) {
    const [{ accessToken, refreshToken, expiresIn }, dispatch] = useDataLayerValue();

    useEffect(() => {
        axios.post(serverLoginURL, {
            code,
        })
            .then(res => {
                dispatch({
                    type: "SET_ACCESS_TOKEN",
                    accessToken: res.data.accessToken,
                });
                dispatch({
                    type: "SET_REFRESH_TOKEN",
                    refreshToken: res.data.refreshToken,
                });
                dispatch({
                    type: "SET_EXPIRES_IN",
                    expiresIn: res.data.expiresIn,
                });

                window.history.pushState({}, null, '/');
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('token', res.data.accessToken);
            })
            .catch(() => {
                window.location = '/';
            });
    }, [code, dispatch]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;

        const interval = setInterval(() => {
            axios.post(serverRefreshURL, {
                refreshToken,
            })
                .then(res => {
                    dispatch({
                        type: "SET_ACCESS_TOKEN",
                        accessToken: res.data.accessToken,
                    });
                    dispatch({
                        type: "SET_EXPIRES_IN",
                        expiresIn: res.data.expiresIn,
                    });
                    sessionStorage.setItem('token', res.data.accessToken);
                })
                .catch(() => {
                    window.location = '/';
                });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn, dispatch]);

    return accessToken;
}

export default useAuth;