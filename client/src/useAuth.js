import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDataLayerValue } from './DataLayer';


const serverLoginURL = 'http://localhost:3001/login';
const serverRefreshURL = 'http://localhost:3001/refresh';


function useAuth(code) {
    const [{ accessToken, refreshToken, expiresIn }, dispatch] = useDataLayerValue();
    const [accessToken1, setAccessToken] = useState();
    const [refreshToken1, setRefreshToken] = useState();
    const [expiresIn1, setExpiresIn] = useState();

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

                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
                window.history.pushState({}, null, '/');
                sessionStorage.setItem('loggedIn', true);
                sessionStorage.setItem('token', res.data.accessToken);
            })
            .catch(() => {
                console.log('login error in uath');
            });
    }, [code]);

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
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                    sessionStorage.setItem('token', res.data.accessToken);
                })
                .catch(() => {
                    window.location = '/';
                });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    return accessToken;
}


export default useAuth;