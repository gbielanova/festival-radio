require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');

const redirectUri = process.env.REDIRECT_URI;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.post('/refresh', (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: redirectUri,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken
    })

    spotifyApi
        .refreshAccessToken()
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                expiresIn: data.body.expires_in,
            })
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(400)
        })
})

app.post('/login', (req, res) => {
    const code = req.body.code;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: redirectUri,
        clientId: clientId,
        clientSecret: clientSecret,
    })

    spotifyApi.authorizationCodeGrant(code)
        .then(
            data => {
                res.json({
                    accessToken: data.body.access_token,
                    refreshToken: data.body.refresh_token,
                    expiresIn: data.body.expires_in,
                })
            })
        .catch((error) => {
            console.log(error);
            res.status(400);
        })
})

app.listen(3001)