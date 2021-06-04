import json
import random
import requests

ME_URL = "https://api.spotify.com/v1/me"
SEARCH_URL = "https://api.spotify.com/v1/search"
ARTISTS_URL = "https://api.spotify.com/v1/artists"
ADD_PLAYLISTS_URL = "https://api.spotify.com/v1/users"
ADD_SONGS_URL = "https://api.spotify.com/v1/playlists"


def generate_playlist(token, name, artists):

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {token}",
    }

    get_user_response = requests.get(ME_URL, headers=headers)
    get_user_response.raise_for_status
    user_id = get_user_response.json()["id"]

    song_uris = []
    for artist in artists:
        params = {"q": artist, "type": "artist"}
        get_artist_response = requests.get(SEARCH_URL, headers=headers, params=params)
        get_artist_response.raise_for_status()
        artist_id = get_artist_response.json()["artists"]["items"][0]["id"]

        get_top_songs_response = requests.get(
            f"{ARTISTS_URL}/{artist_id}/top-tracks?market=ua", headers=headers
        )
        get_top_songs_response.raise_for_status()
        top_songs = get_top_songs_response.json()
        for song in top_songs["tracks"]:
            song_uris.append(song["uri"])

    payload = {"name": name, "public": False}
    create_playlist_response = requests.post(
        f"{ADD_PLAYLISTS_URL}/{user_id}/playlists",
        headers=headers,
        data=json.dumps(payload),
    )
    create_playlist_response.raise_for_status()
    playlist_id = create_playlist_response.json()["id"]

    random.shuffle(song_uris)

    add_songs_response = requests.post(
        f'{ADD_SONGS_URL}/{playlist_id}/tracks?uris={",".join(song_uris)}',
        headers=headers,
    )
    add_songs_response.raise_for_status()

    return playlist_id
